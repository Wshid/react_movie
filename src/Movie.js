import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return (
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        );
        
    }
}


class MoviePoster extends Component{
    render(){
        return(
            <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg" />
        )
    }
}

export default Movie