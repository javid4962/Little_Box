import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OffersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.offer}>Today's Offer: Buy 1 Get 1 Free on Rice!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  offer: { fontSize: 18, fontWeight: 'bold', color: '#E53935' },
});
