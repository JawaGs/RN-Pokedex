import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/Pokemon/Header'
import Stats from '../components/Pokemon/Stats'
import Type from '../components/Pokemon/Type'

// eslint-disable-next-line no-undef
export default function Pokemon ({ route, navigation } = props) {
  const { params } = route
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () =>
        (
          <Icon
            name='arrow-left'
            color='#fff'
            size={20}
            style={{ marginLeft: 20 }}
            onPress={navigation.goBack}
          />
        )

    })
  }, [navigation, params])

  const getPokemon = async () => {
    try {
      const response = await getPokemonDetailsApi(params.id)
      setPokemon(response)
    } catch (error) {
      navigation.goBack()
    }
  }

  useEffect(() => {
    getPokemon()
  }, [params])

  if (!pokemon) return null

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}
