import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, FlatList, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Adventure from './tabs/Adventure'



export default function Home({ navigation }) {
  const [toggle, setToggle] = useState(1)

  const handleToggle = (number) => {
    setToggle(number)
  }
  console.log(toggle);

  return (
    <SafeAreaView>
      <ScrollView>

        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBar} onPress={() => navigation.openDrawer()}>
            <Ionicons name="md-list-sharp" color="#63d2d9" size={30} />
          </TouchableOpacity>
          <View style={styles.profile}>
            <Image source={require('../../assets/profile.jpg')} style={styles.profilePic} />
          </View>
        </View>

        {/* main */}
        <View style={{ width: "80%", paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ fontWeight: 900, fontSize: 35, color: "#000" }}>Find your experience</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <View style={styles.ScrollDiv}>
            <TouchableOpacity activeOpacity={1} style={toggle === 1 ? styles.activeButton : styles.button} onPress={() => handleToggle(1)}>
              <Text style={toggle === 1 ? styles.activeButtonText : styles.buttonText}>Adventures</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ScrollDiv}>
            <TouchableOpacity activeOpacity={1} style={toggle === 2 ? styles.activeButton : styles.button} onPress={() => handleToggle(2)}>
              <Text style={toggle === 2 ? styles.activeButtonText : styles.buttonText}>Experiences</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ScrollDiv}>
            <TouchableOpacity activeOpacity={1} style={toggle === 3 ? styles.activeButton : styles.button} onPress={() => handleToggle(3)}>
              <Text style={toggle === 3 ? styles.activeButtonText : styles.buttonText}>Activities</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ScrollDiv}>
            <TouchableOpacity activeOpacity={1} style={toggle === 4 ? styles.activeButton : styles.button} onPress={() => handleToggle(4)}>
              <Text style={toggle === 4 ? styles.activeButtonText : styles.buttonText}>Ratings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>



        {/* These are the pages according to tabs */}
        {toggle === 1 ? <Adventure  /> : <></>}
      </ScrollView>
    </SafeAreaView>
  )
}


//stylling starts here
const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:"black"
  },
  iconBar: {
    width: "20%",
  },
  profile: {
    width: "20%",
  },
  profilePic: {
    width: 38,
    height: 38,
    borderRadius: 50
  },
  ScrollDiv: {
    marginRight: 10
  },
  button: {
    paddingHorizontal: 9,
    paddingVertical: 10,
    backgroundColor: "transparent"
  },
  activeButton: {
    paddingVertical: 10,
    borderRadius: 50,
    paddingHorizontal: 15,
    backgroundColor: "#63d2d9",

  },
  buttonText: {
    fontWeight: "bold",
    color: "#adb5bd"
  },
  activeButtonText: {
    color: "white"
  },
})