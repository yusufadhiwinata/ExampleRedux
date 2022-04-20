import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../redux/CartItem';
const ShoppingCart = () => {
  const navigation = useNavigation();
  const cartItem = useSelector(state => state);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CartScreen')}
      style={styles.button}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{cartItem.length}</Text>
      </View>
      <Icon name="shoppingcart" size={32} color="#101010" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
  itemContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'gray',
    right: 20,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  itemTitle: {
    color: 'white',
  },
});

export default ShoppingCart;
