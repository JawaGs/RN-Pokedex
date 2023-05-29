import { capitalize, map } from 'lodash'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

const Type = ({ types } = props) => {
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }} key={index}>
          <Text style={styles.pillText}>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10
  },
  pillText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2
  }
})

export default Type
