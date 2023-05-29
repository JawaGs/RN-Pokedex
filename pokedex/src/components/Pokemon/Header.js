import { capitalize } from 'lodash'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

const Header = ({ name, image, order, type } = props) => {
  const color = getColorByPokemonType(type)
  const bgStyle = [{ backgroundColor: color, ...styles.bg }]
  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {capitalize(name)}
          </Text>
          <Text style={styles.order}>
            #{`${order}`.padStart(3, 0)}
          </Text>
        </View>
        <View style={styles.contentImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }]
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27
  },
  order: {
    color: '#fff',
    fontWeight: 'bold'
  },
  contentImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'content'
  }
})

export default Header
