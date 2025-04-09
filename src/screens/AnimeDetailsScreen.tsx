import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Anime } from '../types/anime';


const AnimeDetailsScreen = ({ route }: { route?: any }) => {
  const { anime }: { anime: Anime }  = route?.params || {}; // Recibir el personaje desde los parámetros
   if (!anime){

     return (
       <View style={styles.secondContainer}>
         <Text style={styles.secondTitle}>You must select an anime</Text>
       </View>
     )  // Si no hay personaje, mostrar mensaje de carga
   } 
  return (
    <ScrollView style={{padding:20}}>
      
      <View   style={{padding:20,backgroundColor:'#dedfe2',borderRadius:10,shadowColor:'black',shadowRadius:10}}>
        {/* Aquí se mostrará la información del personaje */}
        <Image source={{uri: anime?.images?.jpg?.image_url }} style={{width: "auto", height: 400}} />

        <Text style={styles.title}>Anime: {anime?.title}</Text>
        <Text style={styles.details}>Genres: {anime?.genres.map((genre) => genre.name).join(', ')}</Text>

        <Text style={styles.details}>Year: {anime?.year}</Text>
        <Text style={styles.details}>Rating: {anime?.rating}</Text>
        <Text style={styles.details}>Status: {anime?.status}</Text>

             

      </View>
    </ScrollView>
  )
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#8a4d1b"
  },
  details: {
    fontSize:  18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#858588"
  },
  
});

export default AnimeDetailsScreen
