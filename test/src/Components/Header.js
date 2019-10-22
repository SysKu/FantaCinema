/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react" 
import "./Header.css";

class Header extends React.Component {
   // eslint-disable-next-line no-useless-constructor
   constructor (props) {
     super(props);
   }
    render() {
      return (
        <div className="header">
            <img src= "TheBigScreenHeader.png" ALT = "TheBigScreen" width="290" height= "150"/>
            <div className="header-right">
            <a className="active" className= "hover" href="" onClick={event => {this.props.pageToShow("Hej hej");
            event.preventDefault();}}>Home</a>
            <a className="active" classname= "hover" href="">Login</a> 
            </div>
        </div>
      )
    }}

    export default Header;