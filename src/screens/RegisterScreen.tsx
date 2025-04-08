import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const RegisterScreen = ({navigation}:any) => {
   
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
 
 const registerControl = async() => {
    if (!name|| !email || !pass){
        Alert.alert('The spaces are required')
        return
    }

    try {
        const data =await AsyncStorage.getItem('users');
        const users = data? JSON.parse(data):[];  
        const exist = users.find((u:any)=> u.email === email)
    
        if(exist){
            Alert.alert('Error','The email has already been registered.')
            return
        }
        const newUser ={name,email,password:pass};
        users.push(newUser);
        await AsyncStorage.setItem('users',JSON.stringify(users))
        Alert.alert('Success','Registration completed')
        navigation.navigate('Login')
    } catch (error) {
        Alert.alert('Error','There is an error when trying to save the user.')

    }
 }
    return (
        <View style={styles.container}>
            <View style= {styles.card}>


            <Text style={styles.title}>Register</Text>

            <TextInput placeholder='Username' style={styles.input}
                value={name} onChangeText={setName}></TextInput>

            <TextInput placeholder='Email' style={styles.input} value={email}
                onChangeText={setEmail}></TextInput>

            <TextInput placeholder='Password' secureTextEntry style={styles.input}
                value={pass} onChangeText={setPass}></TextInput>


            <TouchableOpacity onPress={registerControl} style={styles.button}>
                            <Text style={{color:"white"}}>Create an Account</Text>
                        </TouchableOpacity>
            </View>

        </View>
  )
}
const styles= StyleSheet.create({
    container: {
        padding:20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"gray"
    },
    card:{
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        borderRadius:5,
    },
    button: {
        marginTop: 2,
        padding: 15,
        backgroundColor: '#020202',
        color: '#fff',
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },


})


export default RegisterScreen