import { ScrollView } from 'moti';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const nonVeg = [
  { id: '1', name: 'Rice', brand: 'Good Brand', price: 50, image: require('../assets/item1.jpg') },
  { id: '2', name: 'Wheat', brand: 'Premium Brand', price: 40, image: require('../assets/icon.png') },
  { id: '3', name: 'Wheat', brand: 'Premium Brand', price: 40, image: require('../assets/icon.png') },
  { id: '4', name: 'Wheat', brand: 'Premium Brand', price: 40, image: require('../assets/icon.png') },
];

export default function NonVegScreen() {
  return (
       <View style={styles.container}>
               <FlatList
                   data={nonVeg}
                   keyExtractor={(item) => item.id}
                   renderItem={({ item }) => (
                       <View style={styles.itemCard}>
                           <Image source={item.image} style={styles.image} />
                           <View style={styles.subItemCard}>
                               <Text style={styles.name}>{item.name}</Text>
                               <Text style={styles.brand}>Brand: {item.brand}</Text>
                               <Text style={styles.price}>Price: ₹{item.price}</Text>
                               <TouchableOpacity
                                   style={styles.button}
                                   onPress={() => addToCart(item)}
                               >
                                   <Text style={styles.buttonText}>Add to Cart</Text>
                               </TouchableOpacity>
                           </View>
                       </View>
                   )}
               />
           </View>
       );
   }
   
   const styles = StyleSheet.create({
       container: { padding: 16, backgroundColor: '#f9f9f9', height: '90vh' },
       itemCard: { marginBottom: 16, backgroundColor: '#fff', borderRadius: 8, padding: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, flex: 1, flexDirection: 'row' },
       subItemCard: { margin: 16, flexDirection: 'col' },
       image: { width: '50%', height: 150, borderRadius: 8 },
       name: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
       brand: { fontSize: 14, color: '#555' },
       price: { fontSize: 16, fontWeight: '600', marginVertical: 8 },
       button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 8 },
       buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
   });