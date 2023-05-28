import { View, Text } from 'react-native'
import React from 'react'

const Header = ({name,image}=props) => {
  return (
    <View>
      <Text>{image} </Text>
    </View>
  )
}

export default Header