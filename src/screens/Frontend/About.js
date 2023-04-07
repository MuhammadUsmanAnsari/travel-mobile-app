import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={styles.flexContainer}>
      <Text>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  flexContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})