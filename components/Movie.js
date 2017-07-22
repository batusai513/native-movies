import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const baseImageUrl = 'https://image.tmdb.org/t/p/w320';

function Movie({ movie }) {
  return (
    <Card>
      <CardSection>
        <Text>
          {movie.title}
        </Text>
      </CardSection>
      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: `${baseImageUrl}${movie.poster_path}` }}
        />
      </CardSection>
    </Card>
  );
}

export default Movie;

const styles = StyleSheet.create({
  image: {
    flex: 2,
    width: 320,
    height: 400
  }
});
