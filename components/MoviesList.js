import React from 'react';
import Movie from './Movie';
import { View, ScrollView } from 'react-native';

function MoviesList({ movies }) {
  return(
    <ScrollView>
      {
        movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))
      }
    </ScrollView>
  );
}

export default MoviesList;
