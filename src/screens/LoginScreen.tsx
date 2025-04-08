import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({ navigation }: any) => {
    //Estado para el usuario y contraseña
    const [correo, setCorreo] = React.useState('')
    const [password, setPassword] = React.useState('')
    // Función para validar y redirigir
    
    const manejarLogin =async () => {
               //Validar campos vacios
               if(!correo||!password){
                Alert.alert('Error', 'All spaces are required')
                return;
            }
    
            try{
                //Obtener el usuario guardado en AsyncStorage
                const userData = await AsyncStorage.getItem('users');
                const users= userData? JSON.parse(userData): []; //Parsear el usuario guardado
    
                const user= users.find((u: any) => u.email === correo
                && u.password === password ); //Buscar el usuario por correo
    
                if(user){
                    await AsyncStorage.setItem('user', JSON.stringify(user)); //Guardar el usuario en AsyncStorage
                    navigation.navigate('nav', {user:user.name}); //Navegar a la pantalla de inicio
                }else{
                    Alert.alert('Error', 'Incorrect credentials'); //Mostrar error si no se encuentra el usuario
                    
                }
    
            }catch(error){
                Alert.alert('Error', "The user could not be validated"); //Mostrar error si no se puede validar el usuario
                
            }
    }
    return (
        
        <View style={styles.container}>
            <View style={styles.card}>

            <Text style={styles.title}>Sing in</Text>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCSMkWaF4ReLMfiRu3NXk12zJikhfSx0bSQ&s"}} style={styles.img}></Image>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={correo}
                onChangeText={setCorreo}
            />
            <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
   <TouchableOpacity onPress={manejarLogin} style={styles.button}>
  <Text style={{color:"white"}}>Sing in</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                <Text style={styles.registerText}>Don't you have an account? Register</Text>
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
        backgroundColor: '#000000',
        color: '#fff',
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    img:{
        width: 130,
        height: 130,
        marginBottom: 20
    },
    registerText:{
        marginTop: 20,
        textAlign:'center',
        color:'#0066cc',
        textDecorationLine:'underline'
    },
})

export default LoginScreen
