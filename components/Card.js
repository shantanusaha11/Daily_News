import React from 'react'
import { Pressable, Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import * as WebBrowser from 'expo-web-browser';

const Card = (props) => {
      let { title, imageUrl, description, webUrl } = props
  return (
    <ScrollView>
      <Pressable onPress={() => WebBrowser.openBrowserAsync(webUrl) }>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.Image} source={{uri: !imageUrl ? "https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg" : imageUrl }} />
          <Text style={styles.description}>{description}...</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
      cardContainer: {
            backgroundColor: '#efefef',
            borderRadius: 20,
            width: 380,
            margin: 5,
            marginBottom: 20,
            elevation: 5
      },
      Image: {
            width: 370,
            height: 200,
            marginLeft: 5,
            borderRadius: 20
      },
      title: {
            paddingLeft: 10,
            margin: 8,
            fontSize: 20,
            fontWeight: "bold"
      },
      description: {
           paddingLeft: 15,
           margin: 7
      }
})
export default Card