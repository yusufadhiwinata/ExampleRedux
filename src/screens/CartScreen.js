import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {REMOVE_FROM_CART} from '../redux/CartItem';

const Separator = () => {
  return <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9a9'}} />;
};

const CartScreen = () => {
  const cartItem = useSelector(state => state);
  const dispatch = useDispatch();
  const removeItemFromCart = item =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item,
    });

  return (
    <View style={styles.mainContainer}>
      {cartItem.length !== 0 ? (
        <FlatList
          data={cartItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Image style={styles.image} source={{uri: item.imgUrl}} />
              <View style={styles.otherContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemAuthor}>by {item.author}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.btnRemove}
                    onPress={() => removeItemFromCart(item)}>
                    <Text style={styles.btnTitle}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text>Your cart is empty</Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  otherContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  itemName: {
    fontSize: 24,
    fontWeight: '400',
  },
  itemAuthor: {
    fontWeight: '200',
    fontSize: 16,
  },
  btnRemove: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 8,
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10,
  },
  btnTitle: {
    fontSize: 18,
    color: 'white',
  },
});
