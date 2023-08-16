import React,{Component} from 'react';
import LoginPage from "./src/screens/LoginPage";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';

const App = ()=>{

  const Stack = createNativeStackNavigator();

  return(

    <HomeScreen/>
   
  // <NavigationContainer>
  //  <Stack.Navigator screenOptions={{headerShown:false}}>
  //     <Stack.Screen  name='Login' component={LoginPage}/>
  //     <Stack.Screen name='SignUp' component={SignUp}/>
  //     <Stack.Screen name='HomeScreen' component={HomeScreen}/>
  //  </Stack.Navigator>
  // </NavigationContainer>
  );
};

export default App;
