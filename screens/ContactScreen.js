import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import emailjs from 'emailjs-com';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    if (name && email && message) {
      emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { name, email, message },
        'YOUR_USER_ID'
      )
        .then(() => Alert.alert('Message sent successfully!'))
        .catch((error) => Alert.alert('Failed to send message', error.message));
    } else {
      Alert.alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text style={styles.label}>Message</Text>
      <TextInput style={styles.textArea} value={message} onChangeText={setMessage} multiline />
      <Button title="Send Message" onPress={sendEmail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 8 },
  textArea: { borderWidth: 1, borderColor: '#ccc', padding: 8, height: 100, marginBottom: 16, borderRadius: 8 },
});
