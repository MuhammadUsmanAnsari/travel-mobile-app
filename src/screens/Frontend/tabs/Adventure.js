import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, StyleSheet, Text, FlatList, View, ScrollView, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Adventure({ Detail }) {
    const [view, setView] = useState(true)
    const navigation = useNavigation()

    // flatlist
    const DATA = [
        {
            id: '1',
            title: 'Extreme Surf',
            location: "Santa Cruz",
            image: "https://source.unsplash.com/180x280/?surfing",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex vero molestiae culpa odio maxime ducimus illo? In, laudantium beatae debitis doloremque quidem ipsam, illo repudiandae facere recusandae placeat dignissimos.",
            price:250
        },
        {
            id: '2',
            title: 'Kayaking Lake',
            location: "Lake Pawell",
            image: "https://source.unsplash.com/180x280/?lake",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia optio fuga? Porro iure neque ut libero, deleniti unde deserunt nobis quae laboriosam rerum fugiat. Exercitationem aspernatur necessitatibus non expedita.",
            price:269
        },
        {
            id: '3',
            title: 'Ontario Place',
            location: "Toronto Canada",
            image: "https://source.unsplash.com/180x280/?tree",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi impedit itaque, adipisci, autem harum iusto esse in eos ab voluptate eius explicabo ad officiis dolor distinctio ipsum reprehenderit ex deleniti.",
            price:369
        },
        {
            id: '4',
            title: 'Alexan palace',
            location: "Asyut, Egypt",
            image: "https://source.unsplash.com/180x280/?asyut",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos eaque velit voluptatem dolorum fugiat modi quibusdam quisquam, aliquid aperiam! Quaerat magnam repellat hic minima totam incidunt esse possimus officiis.",
            price:490
        },
        {
            id: '5',
            title: 'Bennerley Viaduct',
            location: "Derbyshire and Nottinghamshire, England",
            image: "https://source.unsplash.com/180x280/?bennerley-viaduct",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo officiis exercitationem, enim sapiente animi culpa doloribus. Quia magnam blanditiis enim beatae, repudiandae exercitationem velit, soluta nisi quae iste inventore quod!",
            price:229
        },
        {
            id: '6',
            title: 'Tusheti National Park',
            location: "Georgia",
            image: "https://source.unsplash.com/180x280/?tusheti-national-park",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque similique libero rerum facilis earum eum quo quas! Assumenda optio rem facilis voluptatem distinctio explicabo quae? Quisquam nostrum nulla velit!",
            price:300
        },
    ];


    const Icons = [
        {
            id: '1',
            title: "Kayak",
            name: "md-boat-outline"
        },
        {
            id: '2',
            title: "Diving",
            name: "man-outline"
        },
        {
            id: '3',
            title: "Climbing",
            name: "git-network"
        },
        {
            id: '4',
            title: "Tracking",
            name: "map-outline"
        },
        {
            id: '5',
            title: "Racing",
            name: "car-sport-outline"
        },
        {
            id: '6',
            title: "Cycling",
            name: "ios-bicycle"
        },
        {
            id: '7',
            title: "Sky Diving",
            name: "cloudy-outline"
        },
        {
            id: '8',
            title: "Horse Riding",
            name: "hand-left-outline"
        }
    ]
    return (
        <>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Card style={styles.cardStylling} mode='contained' onPress={() => { navigation.navigate("Detail", { AdventureDetail: item }) }}>
                        <Card.Cover style={{ height: 280, marginBottom: 10 }} source={{ uri: item.image }} />
                        <ScrollView style={{ paddingHorizontal: 10 }}>
                            <Text variant="titleLarge" style={{ fontWeight: "bold", color: "black", marginBottom: 5 }}>{item.title}</Text>
                            <Text variant="bodyMedium"><Ionicons name='location-sharp' /> {item.location}</Text>
                        </ScrollView>
                    </Card>
                }}
            />
            {/*icons  */}

            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <View style={styles.flexView}>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>What would you like?</Text>
                    {view
                        ? <TouchableOpacity onPress={() => { setView(false) }}>
                            <Text>View All</Text>
                        </TouchableOpacity>
                        :
                        <></>
                    }

                </View>
            </View>

            <FlatList
                data={Icons}
                keyExtractor={item => item.id}
                horizontal
                scrollEnabled={!view}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <View >
                        <View style={[styles.iconStylling, !view ? { marginHorizontal: 12 } : ""]}>
                            <Ionicons name={item.name} color="white" size={30} />
                        </View>
                        <Text variant="titleLarge" style={{ marginVertical: 5, textAlign: "center" }}>{item.title}</Text>
                    </View>
                }}
            />
        </>

    )
}

const styles = StyleSheet.create({
    cardStylling: {
        marginVertical: 20,
        marginHorizontal: 10,
        width: 180,
        height: 340,
        backgroundColor: "#f5f5f5",
    },
    flexView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconStylling: {
        backgroundColor: "#63d2d9",
        padding: 12,
        borderRadius: 50,
        marginHorizontal: 16,

    }
})