import React from 'react'
import { Text ,View, StyleSheet, Image } from 'react-native'
import FacebookLogin from '../components/Auth/FacebookLogin'
import GoogleLogin from '../components/Auth/GoogleLogin'

const LoginScreen = ({navigation, route}) => {
  return (
    <>
      <Text style={styles.title}>Welcome to Daily News !</Text>

      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2540/2540874.png",
        }}
      />

      <View style={styles.container} >
        <Text style={styles.heading} >
          Login to Read the news
        </Text>
        <View style={styles.googleLogin}>
          <GoogleLogin navigation={navigation} route={route} />
        </View>
        <View style={styles.fbLogin}>
          <FacebookLogin navigation={navigation} route={route} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 450,
    width: 400,
    backgroundColor: "#858789",
    borderRadius: 90,
    borderTopRightRadius: 96,
  },

  title: {
    letterSpacing: 1,
    color: "#595b5e",
    top: 60,
    fontWeight: "600",
    left: 45,
    fontSize: 25,
  },

  heading: {
    color: "#ffffff",
    fontWeight: "600",
    left: 68,
    fontSize: 25,
    top: 30
  },

  googleLogin: {
    width: 170,
    margin: 10,
    left: 100,
    top: 70,
    
  },
  fbLogin: {
    width: 170,
    margin: 10,
    left: 100,
    top: 70,
    
  },
  logo: {
    height: 250,
    width: 250,
    margin: 50,
    marginTop: 100,
    top: 20,
    left: 23,
  },
});

export default LoginScreen