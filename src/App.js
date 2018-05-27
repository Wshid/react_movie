import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component {


  state = {
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Avengers",
            poster : "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          },
          {
            title : "Guadians",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Guardians_of_the_Galaxy_Vol_2_poster.jpg/220px-Guardians_of_the_Galaxy_Vol_2_poster.jpg"
          },
          {
            title : "StarWars",
            poster : "https://lumiere-a.akamaihd.net/v1/images/sb_dolby_worldwide_handout_13x19_v3_lg_use_this_one_cc3cc869.jpeg?region=0%2C0%2C821%2C1200"
          },
          {
            title : "DeadPool",
            poster : "http://www.joblo.com/posters/images/full/deadpool-international.jpg"
          }
        ]
      })
    }, 1000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key={index}/>
    })
    return movies;
  }

  render() {
    return ( // 이를 JSX라고 함
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
