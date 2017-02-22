import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchInput}>
            <TextInput style={styles.searchBar} underlineColorAndroid='transparent'/>
          </View>

          <View style={styles.searchButton}>
            <Text>Search</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  searchBar: {
    fontSize: 22,
    paddingVertical: 5,
    paddingHorizontal: 6
  },
  searchBarContainer: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  searchInput: {
    flex: 0.8,
    borderRadius: 6,
  },
  searchButton: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  }
});
