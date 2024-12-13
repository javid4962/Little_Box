import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MotiView } from 'moti';
import Header from '../components/Header';

const nav = [
  { id: '1', name: 'Groceries', image: require('../assets/grocery_bg.png'),color:'#ffff00' },
  { id: '2', name: 'Veg', image: require('../assets/veg_bg.jpg'), color:'#00ff00' },
  { id: '3', name: 'NonVeg', image: require('../assets/non-veg_bg.webp'), color:'#ff0000' },
  { id: '4', name: 'Offers', image: require('../assets/offers_bg.png'), color:'#ffd700' },
  { id: '5', name: 'Contact', image: require('../assets/contact-us_bg.webp'), color:'#0000ff' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Category Cards */}
        <FlatList
          data={nav}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 500 }}
              style={styles.categoryCard}
            >
              <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
                <Image style={styles.image} source={item.image} alt='Category images'/>
                <Text style={[styles.categoryTitle,{backgroundColor:item.color} ]} >{item.name}</Text>
              </TouchableOpacity>
            </MotiView>
          )}
          contentContainerStyle={styles.flatListContent}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: '#fff',
    height: '80vh',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  viewCategoryCard: {
    marginVertical: 8,
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 8,
  },
  categoryCard: {
    marginVertical: 8,
    borderRadius: 8,
    // paddingHorizontal: 8,
    borderWidth:5,
    borderColor:"#000"
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    borderBottomStartRadius:0,
    borderBottomEndRadius:0,
    display:'flex',
    alignItems:'center'

  },
  categoryTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    borderEndStartRadius: 8,
    borderEndEndRadius: 8,
    paddingVertical: 8,
    borderTopWidth:5,
    borderColor:'#000'
  },
  flatListContent: {
    paddingHorizontal: 8,
  },
});
