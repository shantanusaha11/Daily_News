import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const DashboardScreen = ({navigation, route}) => {
  const {name, email, picture} = route.params

  return (
    <>
      <View style={styles.container}></View>
        <Image
          style={styles.profileImage}
          source={{
            uri: picture,
          }}
        />
      <View style={[styles.container2, styles.container1]}>
        <Text>Name</Text>
        <Text>{name}</Text>
      </View>
      <View style={styles.container2}>
        <Text>email</Text>
        <Text>{email}</Text>
      </View>
      <View style={styles.container2}>
        <Text>Verified</Text>
        <Text>yes</Text>
      </View>
      <View style={{width: 110, margin: 30, left: 115}} >
      <FontAwesome.Button
      name='arrow-circle-o-left'
      backgroundColor="#3F7EE8"
      borderRadius={30}
      size={33}
      onPress={()=>{
        AsyncStorage.removeItem('access_token');
        navigation.navigate('Login');
      }}
      >
        Logout
      </FontAwesome.Button>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#2e98db'
  },
  profileImage: {
    height: 120,
    width: 120,
    bottom: 60,
    marginLeft: 135,
    borderRadius: 70
  },
  container1: {
    borderTopWidth: 1
  },
  container2: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#494949",
    padding: 13,
  }
})

export default DashboardScreen