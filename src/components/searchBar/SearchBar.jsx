import React from 'react';
import {TextInput, View} from 'react-native';
import style from './SearchBar.style';

const SearchBar = () => {
  return (
    <View style={style.searchBarBox}>
      <TextInput placeholder="Ara..." style={style.searchBarText}></TextInput>
    </View>
  );
};

export default SearchBar;
