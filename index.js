import React, { Component, PropTypes } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ToastAndroid, Image, Platform } from 'react-native';

const shadowAndroid = {
  elevation: 3
}

const shadowIos = {
  shadowColor: 'black',
  shadowOpacity: 0.3,
  shadowRadius: 3,
  shadowOffset: {width: 0, height: 2}
}

export default class SearchBar extends Component {
  static defaultProps = {
    searchButton: <Image source={{uri: 'https://maxcdn.icons8.com/iOS7/PNG/25/Very_Basic/search-25.png'}} style={{height: 30, width: 30}}/>,
    onPress: () => ToastAndroid.show('Pressed', ToastAndroid.SHORT)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.searchBarContainer, (Platform.OS === 'ios') ? shadowIos : shadowAndroid]}>
          <View style={styles.searchInput}>
            <TextInput
              style={[styles.searchBar, (Platform.OS === 'ios' ? {height: 45} : null)]}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({text})}
            />
          </View>

          <View style={styles.searchButton}>
            <TouchableOpacity onPress={this.props.onPress}>
              {this.props.searchButton}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

SearchBar.propTypes = {
  searchButton: React.PropTypes.node,
  onPress: React.PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    fontSize: 22,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  searchBarContainer: {
    borderRadius: 6,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  searchInput: {
    flex: 0.9,
    borderRadius: 6,
  },
  searchButton: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    marginRight: 6
  },
  icon: {
    height: 28,
    width: 28
  }
});
