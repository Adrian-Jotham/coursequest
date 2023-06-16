import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    alert(`Username: ${username}\nPassword: ${password}`);
  }

  const handleImagePress = (index) => {
    alert(`Image ${index} pressed!`);
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

        <View style={styles.rememberForgotContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.checkboxContainer}>
                <CheckBox
                  value={rememberMe}
                  onValueChange={setRememberMe}
                  style={styles.checkbox}
                  tintColors={{ true: '#5C2605', false: 'black' }}
                />
                <Text style={styles.label}>Remember me</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.signinbutton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style = {styles.signupbutton}>
                Don't have an Account? Sign Up here
            </Text>
        </TouchableOpacity>

        <Text style={styles.text}> Or </Text>
        <Text style={styles.text}> Sign In With </Text>

        <View style={styles.loginaltContainer}>
            <TouchableOpacity
                style={styles.loginaltColumn}
                onPress={() => handleImagePress(0)}
            >
                <Image
                    source={require('./Gambar/Loginalt1.png')}
                    style={styles.image}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginaltColumn}
                onPress={() => handleImagePress(1)}
            >
                <Image
                    source={require('./Gambar/Loginalt3.png')}
                    style={styles.image}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginaltColumn}
                onPress={() => handleImagePress(2)}
            >
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
        marginBottom: 10,
    },
    rememberForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        color: '#5C2605',
    },
    forgotPassword: {
        marginTop: 8,
        color: '#5C2605',
    },
    signinbutton: {
        backgroundColor:'#EFEFEF',
        width: '80%',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#5C2605',
        fontSize: 18,
    },
    signupbutton: {
        color: '#5C2605',
        fontSize: 14,
    },
    text: {
        color: '#5C2605',
        fontSize: 14,
        marginTop: 20,
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
        width: 55,
        height: 55,
        marginHorizontal: 10,
        marginTop: 20,
    },
});

export default LoginScreen;
