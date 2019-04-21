
function pip(data, callback){

  const togglePipButton = data.button;
  // Checking whether the URL exists. If not, assuming there is a video element with id="video"
  if(data.url){
    // Creating video element by the URL passed as parameter from object
    video = document.createElement('video'); 
    video.src = data.url;
  }
  
  // Referenced from https://wicg.github.io/picture-in-picture/

  // Hide button if Picture-in-Picture is not supported or disabled.
  togglePipButton.hidden = !document.pictureInPictureEnabled ||
    video.disablePictureInPicture;

    togglePipButton.addEventListener('click', function() {
      // If there is no element in Picture-in-Picture yet, let’s request
      // Picture-in-Picture for the video, otherwise leave it.
      if (!document.pictureInPictureElement) {
        video.requestPictureInPicture()
        .then(()=>{
          // When the PIP mode is created for the video element
          callback();
        })
        .catch(error => {
          // Video failed to enter Picture-in-Picture mode.
          // const hello = "HELLO";
          callback(error);
          console.log("Failed to enter into PIP mode");
        });
      } else {
        document.exitPictureInPicture()
        .catch(error => {
          callback(error);
          // Video failed to leave Picture-in-Picture mode.
          console.log("Failed to exit from PIP mode");
      });
    }
  });

  // Optional parameter preventDefault to restrict the minimum size of PIP
  if(data.preventDefault){
    // See whether resize is small enough to be PiP. It's a hack, but it'll
    // work for now.
    window.addEventListener('resize', function() {
      if (!document.fullscreenElement) {
        return;
      }
      var minimumScreenSize = 0.33;
      var screenArea = screen.width * screen.height;
      var windowArea = window.outerHeight * window.outerWidth;

      // If the size of the window relative to the screen is less than a third,
      // let's assume we're in PiP and exit fullscreen to prevent Auto PiP.
      if ((windowArea / screenArea) < minimumScreenSize) {
        document.exitFullscreen();
      }
    });
  }
}