/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/Header';
import MoviesListContainer from './components/MoviesListContainer';

export default class albums extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text="Albums" />
        <MoviesListContainer />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => albums);
