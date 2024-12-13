import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ItemCard({ name, brand, price, image, onAddToCart }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.brand}>Brand: {brand}</Text>
      <Text style={styles.price}>Price: ₹{price}</Text>
      <TouchableOpacity style={styles.button} onPress={onAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 16, backgroundColor: '#fff', borderRadius: 8, padding: 16, flexDirection:'row' },
  image: { width: '100%', height: 150, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  brand: { fontSize: 14, color: '#555' },
  price: { fontSize: 16, fontWeight: '600', marginVertical: 8 },
  button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});
