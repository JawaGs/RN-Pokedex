import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

export default function PokemonCard({ pokemon } = props) {

  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${ pokemon.name }`)
  }

  return (
    <TouchableWithoutFeedback onPress={ goToPokemon }>
      <View style={ styles.card }>
        <View style={ styles.spacing }>
          <View style={ styles.bgStyles }>
            <Text style={ styles.number }>#{`${pokemon.order}`.padStart(3,0)}</Text>
            <Text style={ styles.name }>{ pokemon.name }</Text>
            <Image source={{ uri: pokemon.image }} style={ styles.image } />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex:1,
    height: 130,
  },
  spacing: {
    flex:1,
    padding:5,
  },
  bgStyles:{
    backgroundColor: "grey"
  },
  image:{
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10
  }, 
  number:{
    color: "#fff",
    position: 'absolute',
    right:10,
    top:10,
    fontSize: 11,
  }
})