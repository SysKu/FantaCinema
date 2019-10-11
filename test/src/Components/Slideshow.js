 import React from "react" 

 class Slideshow extends React.Component {
    render() {
      return (
        <div>
          <body>
            <div class="slideshow-container">
              <div class="mySlides fade">
                <img src="Lejonkungen.jpg" style="width:100%"/>
                  <div class="text">The Lion King</div>
                    </div>
                    <div class="mySlides fade">
                      <img src="IT.jpg" style="width:100%"/>
                    <div class="text">IT: Chapter Two</div>
                    </div>
                    <div class="mySlides fade">
                   <img src="Spiderman.jpg" style="width:100%"/>
                  <div class="text">Spiderman: Far From Home</div>
                </div>
               <div style="text-align:center">
                <span class="dot"></span> 
                <span class="dot"></span> 
                <span class="dot"></span> 
                </div>
            </div>
          </body>
        </div>
      );
    }

  }