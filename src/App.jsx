import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import ProductList from './components/products/ProductsList';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#FEFDED"}}>
      <ProductList/>
    </SafeAreaView>
  );
};

export default App;
