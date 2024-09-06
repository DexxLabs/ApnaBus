import { Dimensions, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//imports


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

const Home = ():JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={{flex:1,backgroundColor: '#fff'}}>
    <StatusBar backgroundColor={'#fff'}/>
    <View style={styles2.wrapper}>
      <View style={styles2.headerContainer}>
        <View>
        <Text style={styles2.headerText}>Hello User</Text>
        <Text style={styles2.headerText}>Welcome Back</Text>
        </View>

        <View>
          <Image style={styles2.imageHandler} source={require('./assets/images/profile.png')}/>
        </View>
      </View>


      <ScrollView style={{marginTop: 6,marginLeft: 12}} showsHorizontalScrollIndicator={false} horizontal={true} >
      <View style={{flexDirection:'row'}}>
        <Text style={[styles2.DateButtons]}>Today</Text>
        <Text style={styles2.DateButtons}>6 Sep</Text>
        <Text style={styles2.DateButtons}>7 Sep</Text>
        <Text style={styles2.DateButtons}>8 Sep</Text>
        <Text style={styles2.DateButtons}>9 Sep</Text>
        <Text style={styles2.DateButtons}>5 Sep</Text>
        </View>  
      </ScrollView>

      <View style={styles2.card}>
        <View>
          <Text style={styles2.cardText}>5 Sep</Text>
        </View>
        <View style={{flexDirection: 'row',marginLeft: 10,marginTop: 9}}>
          <Image source={require('./assets/images/moon.png')} style={{height:13,width:13}}/>
          <Text style={{fontFamily: 'GothamBold',color: '#fff',marginLeft: 4}}>Rainy</Text>
        </View>

      <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
        <View>
        <Text style={{fontFamily: 'GothamBold',color: '#fff',marginLeft:10,marginTop: 10,fontSize:12}}>Todays Task</Text>
        <Text style={{fontFamily: 'GothamBold',color: '#fff',marginLeft:10,fontSize: 20}}>You Have 2 Shifts Today</Text>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Image source={require('./assets/images/arrow.png')} style={{marginHorizontal: 16}}/>
        </View>
      </View>
      </View>

    <View style={styles2.card2}>
      <View>
      <Text style={{color: '#000',fontFamily: 'GothamBook',paddingTop: 15,paddingLeft: 10}}>Bus 01</Text>
      <Text style={styles2.journey}>Dwarka to Noida</Text>
      <Text style={{color: '#000',fontFamily: 'GothamBook',marginTop:4,paddingLeft: 10}}>07:00AM to 01:00PM </Text>
      </View>
      <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
      <View style={{marginHorizontal: 10,flexDirection: 'row',alignItems: 'center',paddingBottom: 20}}>
        <Image source={require('./assets/images/loc.png')}/>
      <Text style={{color: '#000',fontFamily: 'GothamBold',marginTop:4,textAlignVertical: 'center',marginHorizontal:3}}>SECTOR 18</Text>
      </View>
      <View>
        <View >
      <Image source={require('./assets/images/locBlack.png')} style={{marginHorizontal: 12}}/>
        </View>
      </View>
        

        
      </View>
    </View>


    <View style={styles2.card3}>
      <View>
      <Text style={{color: '#000',fontFamily: 'GothamBook',paddingTop: 15,paddingLeft: 10}}>Break 01</Text>
      <Text style={styles2.journey}>Noida Bus Depot</Text>
      </View>
      <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
      <View style={{marginHorizontal: 10,flexDirection: 'row',alignItems: 'center',paddingBottom: 10}}>
        <Image source={require('./assets/images/Vector.png')}/>
      <Text style={{color: '#000',fontFamily: 'GothamBold',marginTop:4,textAlignVertical: 'center',margin:5}}>Next Bus in 1 Hr</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('./assets/images/locBlack.png')} style={{marginRight: 12,marginBottom:6}}/>
      </View>
        
      </View>
    </View>



    <View style={styles2.card2}>
      <View>
      <Text style={{color: '#000',fontFamily: 'GothamBook',paddingTop: 15,paddingLeft: 10}}>Bus 02</Text>
      <Text style={styles2.journey}>Noida to Shalimaar Bagh</Text>
      <Text style={{color: '#000',fontFamily: 'GothamBook',marginTop:4,paddingLeft: 10}}>01:00PM to 03:00PM </Text>
      </View>
      <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
      <View style={{marginHorizontal: 10,flexDirection: 'row',alignItems: 'center',paddingBottom: 20}}>
        <Image source={require('./assets/images/loc.png')}/>
      <Text style={{color: '#000',fontFamily: 'GothamBold',marginTop:4,textAlignVertical: 'center',marginHorizontal:3}}>Shalimaar Bus Station</Text>
      </View>
      <View >
      <Image source={require('./assets/images/locBlack.png')} style={{marginHorizontal: 12}}/>
      </View>
        
      </View>
    </View>



    </View>
    <View style={styles2.navbarwrapper}>
    <View style={styles2.NavBar}>
      
      <View >
        <View style={[styles2.activeIcon,{backgroundColor: '#fff'}]}>
        <Image source={require("./assets/images/home.png")}/>
        </View>
      </View>
      <View>
        <View style={styles2.activeIcon}>
      <Image source={require("./assets/images/location.png")}/>
      </View>
        
      </View>
      <View style={styles2.activeIcon}>
      <View>
      <Image source={require("./assets/images/user.png")}/>
        
      </View>
      </View>
    </View>
    </View>
    </View>
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