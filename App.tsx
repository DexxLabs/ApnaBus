import { Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//imports
import Home from './screens/Home';


//exports
export const StatusBarHeight = StatusBar.currentHeight
export const {height,width} = Dimensions.get('window')

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  OnBoarding: undefined;
  Home: undefined;
};

export default function App() {
  return (
    <>
    <StatusBar backgroundColor={"#f1f1f1"} barStyle={'dark-content'}/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding'>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

const OnBoarding = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <>
    <StatusBar backgroundColor={"#CF3737"} barStyle={'light-content'}/>

    <View style={styles.wrapper}>

        <View style={styles.header}>
      <Text style={styles.headerText}>APNA BUS</Text>
        </View>


        <View style={styles.IcoText}>
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
            <View style={styles.imageHandler}>
                <Image source={require("./assets/images/parvahan.png")} style={styles.image}/>
            </View>
            <View style={styles.TextHandler}>
                <Text style={styles.descText}>Automated Bus Scheduling and Route Managment System for Delhi Transport Communication</Text>
                </View>
            </View>
        </View>


        <View style={styles.button}>
            <Pressable onPress={()=>navigation.navigate('Home')}>

            <View style={styles.buttonHandler}>
                <Text style={styles.buttonMain}>Get Started</Text>
            </View>
            </Pressable>
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({wrapper:{
  flex:1,
  backgroundColor: '#CF3737',
},
header:{
  flex:1,
  flexGrow:1.5,
},
IcoText: {
  flex:2,
  justifyContent: 'center',
  alignItems: 'center',
},
button: {
  flex:1,
  flexGrow:2,
  justifyContent: 'flex-end',
  marginBottom: 10
},
headerText:{
  textAlign: 'center',
  color: '#fff',
  fontFamily: 'GothamMedium',
  margin: height/30
},
imageHandler:{
  justifyContent: 'center',
  alignItems:'center'
},
image:{
  height: 150,
  width:150
},
descText:{
  fontFamily: 'GothamBook',
  color: '#fff',
  textAlign: 'center'
},
TextHandler:{
  marginHorizontal:12
},
buttonMain:{
  color: '#cf3737',
  fontFamily: 'GothamBold'
},
buttonHandler:{
  backgroundColor: '#fff',
  height: height/15,
  marginHorizontal :12,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 7,
}})