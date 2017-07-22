import React from 'react';
import {View, StyleSheet} from 'react-native';

function CardSection({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

export default CardSection;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});