/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
        <Image source={require('./Gambar/LoginLogo.png')} style={styles.logo}/>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput 
            style={styles.input} 
            placeholder="Username" 
            value={username} 
            onChangeText={setUsername}
            placeholderTextColor= '#9A7F6E'
        />
        <TextInput 
            style={styles.input} 
            placeholder="Email" 
            value={email} 
            onChangeText={setEmail} 
            placeholderTextColor= '#9A7F6E'
        />
        <TextInput 
            style={styles.input} 
            placeholder="Password" 
            value={password} 
            onChangeText={setPassword} 
            placeholderTextColor= '#9A7F6E'
            secureTextEntry 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChangeText={setConfirmPassword} 
            placeholderTextColor= '#9A7F6E'
            secureTextEntry 
        />

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style = {styles.loginButton}>
                Already have an Account? Sign In here
            </Text>
        </TouchableOpacity>

        <Text style={styles.text}> Sign Up With </Text>

        <View style={styles.loginaltContainer}>
        <TouchableOpacity
          style={styles.loginaltColumn}
          onPress={() => handleImagePress(0)}>
          <Image
            source={require('./Gambar/Loginalt1.png')}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginaltColumn}
          onPress={() => handleImagePress(1)}>
          <Image
            source={require('./Gambar/Loginalt3.png')}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginaltColumn}
          onPress={() => handleImagePress(2)}>
          <Image
            source={require('./Gambar/Loginalt2.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    logo: {
        width: 350,
        height: 125,
        marginBottom: 20,
    },
    title: {
        fontSize: 35,
        marginBottom: 16,
        color : '#5C2605',
    },
    input: {
        width: '80%',
        height: 40,
        padding: 10,
        color : 'red',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
    },
    signupButton: {
        backgroundColor:'#EFEFEF',
        width: '80%',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#5C2605',
        fontSize: 18,
    },
    loginButton: {
        color: '#5C2605',
        fontSize: 14,
    },
    text: {
        color: '#5C2605',
        fontSize: 14,
        marginTop: 30,
    },
    loginaltContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      loginaltRow: {
        flexDirection: 'row',
      },
      loginaltColumn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
        marginTop: 20,
      },
});

export default RegisterPage;
