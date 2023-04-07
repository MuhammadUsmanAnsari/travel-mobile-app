import React, { useState } from 'react'
import { StyleSheet, ScrollView, Text, View, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import { Button, Divider, Menu, Provider } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons'

export default function Details({ navigation, route }) {
  const { AdventureDetail } = route.params



  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View >
      <ImageBackground source={{ uri: AdventureDetail.image }} style={{ width: "100%", height: 320 }}>
        <Provider>
          <View style={styles.backgrnd}>
            <View style={styles.topIcons} >
              <Icons name='chevron-back' size={18} color="black" onPress={() => { navigation.goBack() }} />
            </View>
            <View style={styles.topIcons}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Icons name='ios-ellipsis-vertical' size={18} color="black" onPress={openMenu} />}>
                <Menu.Item onPress={() => { navigation.navigate('Messages')}} title="Messages" />
                <Menu.Item onPress={() => { navigation.navigate('Favourite')}} title="Favourite" />
                <Menu.Item onPress={()=>Linking.openURL('https://pinetwork.atlassian.net/servicedesk/customer/portals')} title='Help' />
              </Menu>              
            </View>
          </View>
        </Provider>
      </ImageBackground>

      <View style={{ position: "relative", height: "100%" }} >
        <View style={styles.secondView}>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "black", width: "60%" }}>{AdventureDetail.title}</Text>
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "#63d2d9" }}>${AdventureDetail.price}</Text>
          </View>
          <Text style={{ color: "#63d2d9", marginVertical: 10 }}>
            <Icons name='location-sharp' />{AdventureDetail.location}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black", marginVertical: 10 }}>Description</Text>
          <Text style={{ fontSize: 17, marginBottom: 15 }}>{AdventureDetail.description + AdventureDetail.description}</Text>

          <Button mode="contained" buttonColor='#63d2d9'>Book your adventure</Button>        
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgrnd: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 10
  },
  topIcons: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 50
  },
  secondView: {
    position: "absolute",
    bottom: 0,
    top: -30,
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30
  }
})