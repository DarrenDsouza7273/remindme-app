// LoginScreen.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Routes from './navigation/routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#2E66E7',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  permissionButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
const LoginScreen = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate('home');
  };

  const handlePermissionNotification = () => {

    console.log('Permission notification triggered');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePermissionNotification} style={styles.permissionButton}>
        <Text style={styles.buttonText}>Trigger Permission Notification</Text>
      </TouchableOpacity>
    </View>
  );
};


export default LoginScreen;
