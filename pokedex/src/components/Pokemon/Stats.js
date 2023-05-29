import { capitalize, map } from 'lodash'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Stats = ({ stats } = props) => {
  const barStyles = (num) => {
    const color = num < 30 ? '#ff3e3e' : num < 60 ? '#FFCE4B' : '#00ac17'
    return {
      backgroundColor: color,
      width: `${num}%`
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Base Stats
      </Text>
      {map(stats, (item, index) => (
        <View style={styles.block} key={index}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>
              {capitalize(item.stat.name)}
            </Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>
              {item.base_stat}
            </Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 40
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  blockTitle: {
    width: '35%'
  },
  statName: {
    fontSize: 14,
    color: '#6b6b6b'
  },
  blockInfo: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  number: {
    width: '12%',
    fontSize: 14
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '88%',
    height: 6,
    borderRadius: 20,
    overflow: 'hidden'
  },
  bar: {
    height: 6,
    borderRadius: 20
  }
})

export default Stats
