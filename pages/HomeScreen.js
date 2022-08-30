import React, { useEffect, useState, useLayoutEffect } from "react";
import Card from "../components/Card";
import { getNews } from "../api";
import { ScrollView, View, Pressable, Image, StyleSheet, LogBox  } from "react-native";
import HorizontalNavbar from "../components/HorizontalNavbar";
import LoadingScreen from "../components/LoadingScreen";

LogBox.ignoreAllLogs();

const HomeScreen = ({ route, navigation }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  let fetchAllNews = async () => {
    setLoading(true);
    let allNews = await getNews();
    setNews(allNews.data.data);
    setLoading(false);
  };

  let toDashboard = (name,email,picture)=>{
    navigation.navigate('Dashboard', {'name': name, 'email': email, 'picture': picture})
  }

  useLayoutEffect(() => {
    const{name, email, picture} = route.params;
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={()=>{toDashboard(name, email, picture)}}>
          <Image style={styles.headerImage} source={{uri: picture}} />
        </Pressable>
      ),
    })
  })

  useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    <>
      <HorizontalNavbar navigation={navigation} route={route} />
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView>
          {news.map((allnews) => {
            return (
              <View key={allnews.url}>
                <Card
                  title={allnews.title}
                  imageUrl={allnews.image}
                  description={
                    allnews.description ? allnews.description.slice(0, 88) : ""
                  }
                  webUrl={allnews.url}
                />
              </View>
            );
          })}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    borderColor: 'green', 
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 0
  }
})

export default HomeScreen;
