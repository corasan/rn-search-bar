# rn-search-bar
React Native search bar for Android and iOS


## Installation

`npm i --save rn-searchBar`

## Usage

```javascript
import SearchBar from 'rn-search-bar';

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar/>
      </View>
    );
  }
}
```

## Props

| Props          | Type     | Description                                          |
|----------------|----------|------------------------------------------------------|
| `searchButton` | node     | Use whatever icon you want or text you want to use   |
| `onPress`      | function | What you want to do when you press the search button | 
