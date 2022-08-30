import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";


const HorizontalNavbar = ({navigation}) => {
  
  return (
    <FlatList
      data={[
        { title: "General", name: "general" },
        { title: "Business", name: "business" },      
        { title: "Entertainment", name: "entertainment" },
        { title: "Health", name: "health" },
        { title: "Science", name: "science" },
        { title: "Sports", name: "sports" },
        { title: "Technology", name: "technology" },
      ]}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={(category) => {
        return (
          <View>
            <TouchableOpacity style={styles.button} onPress={()=>{
              navigation.navigate('News',{'categoryNewsName': category.item.name})
            }}>
              <Text>{category.item.title}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({

      button:{
            backgroundColor: "#dbdbdb",
            width: 110,
            height: 33,
            margin: 7,
            borderRadius: 3,
            alignItems: "center",
            padding: 5,
            paddingBottom: 10  
      }
});

export default HorizontalNavbar;
