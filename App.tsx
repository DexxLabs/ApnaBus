import { Dimensions, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//imports
import Home from './screens/Home';
import OnBoarding from './screens/OnBoarding';

//exports
export const StatusBarHeight = StatusBar.currentHeight
const {height,width} = Dimensions.get('window')

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
}}
)

const styles2 = StyleSheet.create({
  header:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper:{
    backgroundColor: '#fff',

  },
  headerText:{
    color: '#000',
    fontFamily: 'GothamBook',
    fontSize: 18,

  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:16,
  },
  imageHandler:{
    height: 50,
    width:50,
    borderRadius: 25
  },
  DateButtons:{
    color: '#fff',
    backgroundColor: '#000',
    paddingHorizontal: width/15,
    paddingVertical: 10,
    fontFamily: 'GothamBold',
    borderRadius: 30,
    marginLeft: 5
  },
  card:{
    height: 170,
    backgroundColor: '#CF3737',
    marginHorizontal: 16,
    borderRadius: 13,
    marginTop: 9
  },
  cardText:{
    fontFamily: 'GothamBold',
    color: "#fff",
    fontSize: 48,
    marginLeft: 10,
    marginTop: 20
  },
  card2:{
    backgroundColor: '#f1f1f1',
    height: height/6,
    marginHorizontal: 20,
    marginTop: 9,
    borderRadius: 13,
    justifyContent: 'space-between'
  },
  journey:{
    fontFamily: 'GothamBold',
    fontSize: 25,
    color: "#000",
    marginHorizontal: 10
  },
  card3: {
    backgroundColor: '#D0E9BC',
    height: height/8,
    marginHorizontal: 20,
    marginTop: 9,
    borderRadius: 13,
    justifyContent: 'space-between'
  },
  NavBar:{
    height: height/13,
    width: width/2,
    backgroundColor: '#CF3737',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  activeIcon:{
    height: height/15,
    justifyContent: 'center',
    alignItems: 'center',
    width: height/13,
    borderRadius: 100
  },
  navbarwrapper:{
    position: 'absolute',
    left: '50%',
    bottom:10,
    transform: [{ translateX: -width/4 }]
  }

}
)