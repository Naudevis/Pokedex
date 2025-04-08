import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importa el navegador tipo Drawer
import HomeScreen from '../screens/HomeScreen'; // Pantalla principal
import DetailsScreen from '../screens/AnimeDetailsScreen'; // Pantalla de detalles
import 'react-native-gesture-handler';
import { NavigationContainer, Route } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimeSreen from '../screens/AnimeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Button } from 'react-native';

// Crea una instancia del navegador tipo Drawer
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();// 👉 DrawerNavigator recibe props

const DrawerNavigator = ({ route }:{route:any}) => {
  const DummyScreen = () => null;
  const  {user}  = route.params || {}; // ✅ Asegura que no sea undefined al principio

  return (
    <Drawer.Navigator
      initialRouteName="Home"

      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#fefbfb',
        drawerActiveTintColor: '#0a803d',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10,
        },
      }}
    >
      {/* 👇 Pasamos `user` como prop al Home */}
      <Drawer.Screen name="Home"  component={HomeScreen} initialParams={{ name: user }}/>
      <Drawer.Screen name="Animes" component={  AnimeSreen} />
      <Drawer.Screen name={"Details"} component={DetailsScreen} />
      {/* <Drawer.Screen name={"Exit"} component={}  /> */}
      <Drawer.Screen
  name="Log out"
  component={DummyScreen}
  options={{
    drawerLabel: 'Log out',
    // drawerIcon: ({ color, size }) => (
    //   <Button title='Cerrar'></Button>
    // ),
    headerShown: false,
  }}
        listeners={({ navigation }: any) => ({
          focus: async () => {
            try {
              await AsyncStorage.removeItem('user');
              Alert.alert('Success', 'Closed Session')
              navigation.replace('Login');
            } catch (error) {
              Alert.alert('Error', 'Logout error')
            }
          },
        })}
/>
    </Drawer.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
   
      <GestureHandlerRootView style={{ flex: 1 }} >
      <Stack.Navigator initialRouteName= "Splash"  >
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={RegisterScreen}
        options={{title:'Register', headerStyle: {
          backgroundColor: '#000000',
        },headerTintColor:"white"}} />
                <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }}/> 

          <Stack.Screen name="nav" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </GestureHandlerRootView>
  );
};

export default DrawerNavigation;