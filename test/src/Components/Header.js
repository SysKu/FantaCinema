import React from "react" 

 class Header extends React.Component {
    render() {
      return (
        <div className="header">
            <IMG src= "MovieZonePrick.PNG" ALT = "MovieZone" width="200" Height= "150"/>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#LogIn" ><button onclick="document.getElementById('id01').style.display='block'" 
                style="width:50%;">Login</button></a>
            </div>
        </div>
      )
    }}

    export default Header;