import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryNewsScreen from './pages/CategoryNewsScreen';
import DashboardScreen from './pages/DashboardScreen';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen}/>
        <Stack.Screen name='Home' options={{headerBackVisible: false}} component={HomeScreen} />
        <Stack.Screen name='Dashboard' component={DashboardScreen}/>
        <Stack.Screen name='News' component={CategoryNewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

