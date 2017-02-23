# rn-search-bar [![npm version](https://badge.fury.io/js/rn-searchbar.svg)](https://badge.fury.io/js/rn-searchbar)
React Native search bar for Android and iOS

![screenshot](https://github.com/corasan/rn-search-bar/blob/master/screenshot.png)

## Installation

`npm i --save rn-searchbar`

## Usage

```javascript
import SearchBar from 'rn-searchbar';

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar searchButton={<Text>Search</Text>} onPress={(text) => console.log(text)}/>
      </View>
    );
  }
}
```

## Props

| Props                | Type     | Description                                          |
|----------------------|----------|------------------------------------------------------|
| `searchButton`       | node     | Use whatever icon you want or text you want to use   |
| `onPress(inputText)` | function | What you want to do when you press the search button |
