import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { getNewsByCategory } from "../api";
import Card from "../components/Card";
import LoadingScreen from "../components/LoadingScreen";

const CategoryNewsScreen = ({ route }) => {
  const [categorizedNews, setCategorizedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  let { categoryNewsName } = route.params;

  let fetchNewsByCategory = async () => {
    setLoading(true);
    let allNews = await getNewsByCategory(categoryNewsName);

    setCategorizedNews(allNews.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNewsByCategory();
    return () => {
      setCategorizedNews([]);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView>
          {categorizedNews.map((allnews) => {
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

export default CategoryNewsScreen;
