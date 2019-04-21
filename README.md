# Picture In Picture
A minimal function to simplify the implementation of PIP mode in chrome

![PIP demo](http://g.recordit.co/M4SXr0PJcw.gif)

## Usage
  ```javascript
  pip(object, callback);
  ```
  The `object` contains
  ```javascript
    var object = {
      // DONOT pass this url if you already have video in your HTML file
      url : 'location or url of the video',
      button : pipButton,
      
      //optional
      preventDefault : true
    };
  ```
  The **button** can be referenced using `getElementById()`
  
## Example
  ```javascript
    const PipButton = document.getElementById('togglePipButton');
    // Creating data object
    const data = {
      url : 'video.mp4',
      button : PipButton
    }
    // Calling the function to initiate picture-in-picture
    pip(data,
      // handling callback
      (err) => {
        if(err) {
          // Handle the error
          return console.log("Error");
        }
        // On sucessful creation of Picture-in-picture mode
        console.log("Sucessful");
      }
    );
  ```
  
  ## How to get started
   1. Download `app.js` into your system
   
   2. Include the downloaded `app.js` in your HTML file
      ```HTML
        <script src="location/app.js"></script>
      ```
      In above code, replace `location` with the location where `app.js` is stored
      
   3. Include a video in your HTML file with id as video
   
   4. Create a button inside `body` of HTML, to toggle the PIP mode
      ```HTML
     
      ...
      <body>
        <video src="location/video.mp4" id="video" ></script>
        <button id="togglePIP">togglePIP</button>
      </body>
      
      ```
   4. Write the below script inside the `body` to initiate PIP for the video
      ```HTML
        ...
        <script>
          const pipButton = document.getElementById('togglePIP');
        
          pip({pipButton}, (err)=>{
            if(err)
              return console.log(err);
            console.log('Sucessful');
          })
        </script>
      </body>
      ```
 ## Troubleshoot
  - Raise an issue in this repo if you find any bug
  - contact me directly in [telegram](https://t.me/harsha20599)
