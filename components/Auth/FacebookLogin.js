import React, {useEffect} from "react";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { fetchFacebookUserInfo } from "../../api";
import FontAwesome from '@expo/vector-icons/FontAwesome';


WebBrowser.maybeCompleteAuthSession();

const FacebookLogin = ({navigation, route}) => {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "353002413577821",
    androidClientId: "353002413577821",
  });


  useEffect(() => {
    if (response?.type === "success") {
      const access_token = response.authentication.accessToken;
      console.log(access_token)
      AsyncStorage.setItem('access_token',access_token);
      fetchFacebookUserInfo(access_token).then((info)=>{
        const {name, email, picture} = info.data
        const {url} = picture.data
        navigation.navigate('Home',  {'email': email, 'name': name, 'picture': url})
      });
    }
  }, [response]);


  return (
      
    <FontAwesome.Button
      name="facebook"
      borderRadius={30}
      backgroundColor="#3b5998"
      size={25}
      disabled={!request}
      title="Login"
      onPress={() => promptAsync()}
    >
      Login with Facebook
    </FontAwesome.Button>
  );
};

export default FacebookLogin;
