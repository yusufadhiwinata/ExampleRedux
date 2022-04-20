import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {mockdata} from '../utils/mockdata';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../redux/CartItem';

const Separator = () => {
  return <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9a9'}} />;
};

const BookScreen = () => {
  const dispatch = useDispatch();
  const addItemTocart = item => dispatch({type: ADD_TO_CART, payload: item});
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mockdata}
        keyExtractor={item => item.id.toString()}
        key={item => item.id.toString()}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <View style={styles.bookItemContainer}>
            <Image source={{uri: item.imgUrl}} style={styles.image} />
            <View style={styles.otherContainer}>
              <Text style={styles.itemTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.itemAuthor}>by {item.author}</Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => addItemTocart(item)}>
                  <Text style={styles.btnTitle}>Add +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookItemContainer: {
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
  itemTitle: {
    fontWeight: '400',
    fontSize: 18,
  },
  itemAuthor: {
    fontWeight: '200',
  },
  btnContainer: {
    position: 'absolute',
    top: 110,
    left: 10,
  },
  button: {
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
  btnTitle: {
    fontSize: 24,
    color: 'white',
  },
});

export default BookScreen;
