import React from 'react'
import { Text, View ,Image, StyleSheet} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const HomeScreen = ({ route }: any) => {
  const  {name}  = route.params || {};

  if (!name) {
    return <Text>No hay nombre en la ruta</Text>
  }
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Welcome, {name} </Text>
      <Image source={{uri:"https://i.redd.it/rest-in-peace-akira-toriyama-the-creator-of-dragon-ball-and-v0-ephidluarbnc1.png?width=1080&format=png&auto=webp&s=6cbf3d29fed3bca8a18921b0a6853927d4fba203"}} style={styles.image}></Image>
    </View>
  )
}

const styles= StyleSheet.create({

  title:{
    fontSize: 50,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    width: '90%',
    color:"white",
    zIndex: 1,
    padding:25,
    borderRadius: 5,

    
  },
  container: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  }
})
export default HomeScreen
