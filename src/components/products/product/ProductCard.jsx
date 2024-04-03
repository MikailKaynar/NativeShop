import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProductCard.style';
const ProductCard = ({products}) => {
  return (
    <View style={styles.Card}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <Image source={{uri: products.imgURL}} width={120} height={120} resizeMode='contain'/>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
        {products.title}
      </Text>
      <Text style={{color: 'black', paddingVertical: 5}}>{products.price}</Text>
      <Text>
        {!products.inStock && <Text style={{color: 'green'}}>STOKTA YOK</Text>}
      </Text>
    </View>
  );
};

export default ProductCard;
