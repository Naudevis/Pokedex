import React, { useEffect, useState } from 'react'
import { Anime } from '../types/anime'
import api from '../apis/animeApi';
import AnimeCard from '../components/AnimeCard'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import global from '../styles/global'
const AnimeScreen = () => {
    const[animes,setAnime]= useState<Anime[]>([])
    const [loading,setLoading] = useState(true);
    const navigation =useNavigation()
    useEffect(() =>{
        featchAnimes();
    },[])
    const featchAnimes = async () =>{
        try{
            const response =await api.get('/anime')
            console.log(response);
            setAnime(response.data.data)

        }catch(error){
            console.error('Error loading animes')
        }finally{
            setLoading(false);
        }
    }

    if(loading){
        return (
            <View  style={[global.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#000"/>
                <Text>Cargando...</Text>
            </View>
        )
    }

  return (
    <ScrollView style={global.container}>
        <Text style={global.tittle}>Animes</Text>


        {animes.map((a) =>(
            <AnimeCard key={a.mal_id}  anime={a}   navigation={navigation}/>
        ))

        }
    </ScrollView>
  )
}

export default AnimeScreen
