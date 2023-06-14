import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image } from 'react-native'; 


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Username: ${username}\nPassword: ${password}`);
  }

  return (
    <View style={styles.container}>
        <Image source={require('./Gambar/LoginLogo.png')} style={styles.logo}/>
        <Text style={styles.title}>Sign In</Text>
        <TextInput 
            style={styles.input} 
            placeholder="Username" 
            value={username} 
            onChangeText={setUsername} 
         />
        <TextInput 
            style={styles.input} 
            placeholder="Password" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry 
        />
        <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEDEDE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        color : '#5C2605',
    },
    input: {
        width: '80%',
        height: 40,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#5C2605',
        marginBottom: 20,
    },
    logo: {
        width: 350,
        height: 125,
    },
});

export default LoginScreen;