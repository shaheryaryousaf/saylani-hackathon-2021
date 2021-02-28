import React from 'react'
import { View, StyleSheet } from 'react-native'

const ListItemSeparator = () => {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#dcdcdc',
  },
})

export default ListItemSeparator
