import React from 'react'
import { Anime } from '../types/Anime'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import global from '../styles/global'

const AnimeCard = ({anime,navigation}:{anime?:Anime,navigation:any}) => {
  const handlePress = () => {
    navigation.navigate('Details', { anime }); 
  };
  return (
    <TouchableOpacity onPress={handlePress}>
          <Image source={{ uri: anime?.images?.jpg?.image_url }} style={global.AnimeImg} />
        <Text style={global.AnimeTitle}>{anime?.title}</Text>
    </TouchableOpacity>
  )
}


export default AnimeCard
