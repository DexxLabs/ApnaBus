import { Button, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import OnBoarding from './OnBoarding';
import { RootStackParamList } from '../App'
import Card1 from '../src/card1';
import Card2 from '../src/Card2';
import MainCard from '../src/MainCard';


const {height,width} = Dimensions.get('window')
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}:HomeProps) => {

  return (
    <>
    <ScrollView style={{flex:1,backgroundColor: '#fff'}}>
    <StatusBar backgroundColor={'#fff'}/>
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <View>
        <Text style={styles.headerText}>Hello User</Text>
        <Text style={styles.headerText}>Welcome Back</Text>
        </View>

        <View>
          <Image style={styles.imageHandler} source={require('../assets/images/profile.png')}/>
        </View>
      </View>


      <ScrollView style={{marginTop: 6,marginLeft: 12}} showsHorizontalScrollIndicator={false} horizontal={true} >
      <View style={{flexDirection:'row'}}>
        <Text style={[styles.DateButtons]}>Today</Text>
        <Text style={styles.DateButtons}>6 Sep</Text>
        <Text style={styles.DateButtons}>7 Sep</Text>
        <Text style={styles.DateButtons}>8 Sep</Text>
        <Text style={styles.DateButtons}>9 Sep</Text>
        <Text style={styles.DateButtons}>5 Sep</Text>
        </View>  
      </ScrollView>



      <MainCard taskRemaining={2} date='6 Sep' weather='RAINY' />

      <Card1 source='Dwarka' destination='Noida' departure='7:00AM' arrival='1:00PM' busNo={1} location='SECTOR 18'/>
    

      <Card2 destination='Noida Bus Depot' breakNO={1} arrivalMessage='Next Bus in 1 Hr' />


       <Card1 source='Noida' destination='Shalimaar Bagh' arrival='4:00PM' departure='2:00PM' busNo={2} location='Shalimaar Bus Station'/>




    </View>
    </ScrollView>
    <View style={styles.navbarwrapper}>
    <View style={styles.NavBar}>
      
      <View >
        <View style={[styles.activeIcon,{backgroundColor: '#fff'}]}>
        <Image source={require("../assets/images/home.png")}/>
        </View>
      </View>
      <View>
        <View style={styles.activeIcon}>
      <Image source={require("../assets/images/location.png")}/>
      </View>
        
      </View>
      <View style={styles.activeIcon}>
      <View>
      <Image source={require("../assets/images/user.png")}/>
        
      </View>
      </View>
    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
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

})

export default Home;