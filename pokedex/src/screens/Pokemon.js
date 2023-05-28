import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/Pokemon/Header'

export default function Pokemon({ route, navigation }=props) {
  const { params } = route
  const [pokemon, setPokemon] = useState(null)

  const getPokemon = async () =>{
    try {
      const response = await getPokemonDetailsApi(params.id)
      setPokemon(response)
      // console.log("Imagenes del Pokemon", pokemon.sprites.other)
    } catch (error) {
      navigation.goBack()
    }
  }

  useEffect(() => {
    getPokemon()
  }, [params])
  

  if( !pokemon ) return null;

  return (
    <ScrollView>
      <Header name={pokemon.name} order={pokemon.order} image={pokemon.sprites.other["official-artwork"].front_default} />
    </ScrollView>
  )
}