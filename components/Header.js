import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({text}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  header: {
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2
  }
});