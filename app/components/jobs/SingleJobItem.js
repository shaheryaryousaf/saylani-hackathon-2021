import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

// Import Libraries
import { Feather } from '@expo/vector-icons'

const SingleJobItem = ({ title, description, expected_salary, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.listItemDetail}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.salary}>Expected Salary: ${expected_salary}</Text>
        </View>
        <View>
          <Feather name='chevron-right' size={14} color='black' />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
  listItemDetail: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '93%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  text: {
    fontStyle: 'italic',
    fontSize: 14,
    marginVertical: 5,
  },
  salary: {
    fontSize: 15,
  },
})

export default SingleJobItem
