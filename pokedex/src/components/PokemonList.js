import { Text, StyleSheet, FlatList } from 'react-native'
import PokemonCard from './PokemonCard'

export default function PokemonList( { pokemons }=props ) {
  return (
    <FlatList 
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={ (pokemon) => String(pokemon.id) }
      renderItem={ ({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={ styles.flatListContentContainer }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer:{
    paddingHorizontal: 5
  }
})