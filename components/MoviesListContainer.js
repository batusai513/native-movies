import React, { Component } from 'react';
import MoviesList from './MoviesList';
import { get } from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = '475d960c7374b0d07a51bf9f1e9cfd03';

function discoverMovies(baseUrl, apiKey) {
  return `${baseUrl}discover/movie?api_key=${apiKey}`
}

class MoviesListContainer extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    get(discoverMovies(baseUrl, apiKey))
      .then(response => response.data.results)
      .then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return <MoviesList movies={movies} />;
  }
}

export default MoviesListContainer;
