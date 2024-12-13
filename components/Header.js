import React from 'react';
import { View, Text,Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({ title, onThemeChange }) {
    return (
        <View style={styles.header}>
            <Text style={styles.appName}>Little Box 🍱</Text>
            <View style={styles.headerButtons}>
                <Button title="Login" onPress={() => { }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    appName:{fontSize: 24, fontWeight:'bold', fontFamily:'Cambria'},
    title: { fontSize: 24, fontWeight: 'bold' },
    themeIcon: { fontSize: 24 },
});
