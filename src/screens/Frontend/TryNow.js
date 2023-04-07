import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function TryNow({ navigation }) {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.text}>
                <Text style={{ fontWeight: 900, fontSize: 35, color: "#000" }}>Discover mindful hiking</Text>
                <Text style={{ marginVertical: 20 ,fontSize:15}}>Hiring and connecting with nature? Choose a way that is right for you!</Text>
                <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => { navigation.navigate("Start") }} delayLongPress={2}>
                    <Text style={{ textAlign: "center", fontSize:15,color: "white" }}>Try now</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1,marginTop:10 }}>
                <Image source={{uri:"https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MzZ8fHRyYXZlbHxlbnwwfHwwfHw%3D&w=1000&q=80"}} style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "#f1efee"
    },
    text: {
        paddingTop: 90,
        paddingHorizontal: 25,
        width: "80%"
    },
    btn: {
        width: "70%",
        backgroundColor: "#63d2d9",
        paddingVertical: 14,
        borderRadius: 20
    },
    image: {
        flex: 1,
        width: "100%",

    }
})