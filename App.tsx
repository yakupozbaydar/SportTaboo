import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './src/screens/Game';
import GameScreen from './src/screens/GameScreen';
import Home from './src/screens/Home';

export default function App() {
  const AppStack =createNativeStackNavigator();
  const AppStackScreen = () => {
    return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown:false, }}>
        <AppStack.Screen name='HomeScreen' component={Home}/>
        <AppStack.Screen name='GameScreen' component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  )}


  return (
      <AppStackScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
