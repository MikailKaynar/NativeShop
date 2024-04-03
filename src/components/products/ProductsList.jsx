import React from 'react';
import {FlatList, View} from 'react-native';
import DATA from '../../data.json';
import ProductCard from './product/ProductCard';
import SearchBar from '../searchBar/SearchBar';
const ProductList = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <SearchBar />}
        data={DATA}
        renderItem={({item}) => <ProductCard products={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductList;
