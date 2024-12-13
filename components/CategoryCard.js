import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CategoryCard({ title, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { margin: 16, borderRadius: 8, overflow: 'hidden' },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { textAlign: 'center', marginTop: 8, fontSize: 18, fontWeight: '600' },
});
