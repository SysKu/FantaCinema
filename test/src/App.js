import React from 'react';

import './App.css';
import Header from "./Components/Header";
import Slideshow from './Components/Slideshow/Slideshow';
import MovieQuotes from './Components/MovieQuotes/MovieQuotes';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {showPage:""};
  }
render(){
  return (
    <>
    <Header pageToShow={page => this.setState({showPage: page})}/>
    {this.state.showPage}
    <Slideshow />
    <MovieQuotes />
     </>
            
  )
};
}

export default App;
