import React, { useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { fetchGoogleUserInfo } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome';


WebBrowser.maybeCompleteAuthSession();

const GoogleLogin = ({navigation, route}) => {

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "369341688083-2qr96072841hvu9n4rk165vesbn50te6.apps.googleusercontent.com",
    androidClientId: '369341688083-grub08rs98gd30f0m44bertnfa29un9q.apps.googleusercontent.com',
  });


  useEffect(() => {
    if (response?.type === 'success') {
     let access_token = response.authentication.accessToken
     AsyncStorage.setItem('access_token',access_token)
     fetchGoogleUserInfo(access_token).then((userInfo)=>{
      const {name, email, picture} = userInfo.data
      navigation.navigate('Home', {'email': email, 'name': name, 'picture': picture});
     })
    }
  }, [response]);

  return (
    <FontAwesome.Button
      name="google"
      backgroundColor="#3F7EE8"
      disabled={!request}
      borderRadius={30}
      size={25}
      onPress={() => {
        promptAsync();
      }}
    >
      Login with Google
    </FontAwesome.Button>
  );
}




export default GoogleLogin;