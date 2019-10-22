import React, { Component } from 'react'
import "./MovieQuotes.css";

class MovieQuotes extends Component {
     movieQuotes = require('movie-quotes');
    render() {
        var movieQuotes = require("movie-quotes")
        return (
            <div className = "MovieQuotes">
               {movieQuotes.random()}
               </div>
        )
    }
}
export default MovieQuotes

