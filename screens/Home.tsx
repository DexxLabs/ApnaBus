import { Button, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, RootStackParamList, width } from '../App'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import OnBoarding from './OnBoarding';



const Home = ():JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={{flex:1,backgroundColor: '#fff'}}>
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

      <View style={styles.card}>
        <View>
          <Text style={styles.cardText}>5 Sep</Text>
        </View>
        <View style={{flexDirection: 'row',marginLeft: 10,marginTop: 9}}>
          <Image source={require('../assets/images/moon.png')} style={{height:13,width:13}}/>
          <Text style={{fontFamily: 'GothamBold',color: '#fff',marginLeft: 4}}>Rainy</Text>
        </View>

      <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
        <View>
        <Text style={{fontFamily: 'GothamBold',color: '#fff',marginLeft:10,marginTop: 10,fontSize:12}}>Todays Task</Text>
        <Text style={{fontFamily: 'GothamBold',color: '#fff',marginLeft:10,fontSize: 20}}>You Have 3 Shifts Today</Text>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Image source={require('../assets/images/arrow.png')} style={{marginHorizontal: 16}}/>
        </View>
      </View>
      </View>

    <View style={styles.card2}>
      <View>
      <Text style={{color: '#000',fontFamily: 'GothamBook',paddingTop: 15,paddingLeft: 10}}>Bus 01</Text>
      <Text style={styles.journey}>Dwarka to Noida</Text>
      <Text style={{color: '#000',fontFamily: 'GothamBook',marginTop:4,paddingLeft: 10}}>07:00AM to 01:00PM </Text>
      </View>
      <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
      <View style={{marginHorizontal: 10,flexDirection: 'row',alignItems: 'center',paddingBottom: 20}}>
        <Image source={require('../assets/images/loc.png')}/>
      <Text style={{color: '#000',fontFamily: 'GothamBold',marginTop:4,textAlignVertical: 'center',marginHorizontal:3}}>SECTOR 18</Text>
      </View>
      <View >
      <Image source={require('../assets/images/locBlack.png')} style={{marginHorizontal: 12}}/>
      </View>
        

        
      </View>
    </View>


    <View style={styles.card3}>
      <View>
      <Text style={{color: '#000',fontFamily: 'GothamBook',paddingTop: 15,paddingLeft: 10}}>Break 01</Text>
      <Text style={styles.journey}>Noida Bus Depot</Text>
      </View>
      <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
      <View style={{marginHorizontal: 10,flexDirection: 'row',alignItems: 'center',paddingBottom: 10}}>
        <Image source={require('../assets/images/Vector.png')}/>
      <Text style={{color: '#000',fontFamily: 'GothamBold',marginTop:4,textAlignVertical: 'center',margin:5}}>Next Bus in 1 Hr</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../assets/images/locBlack.png')} style={{margin: 12}}/>
      </View>
        
      </View>
    </View>



    <View style={styles.card2}>
      <View>
      <Text style={{color: '#000',fontFamily: 'GothamBook',paddingTop: 15,paddingLeft: 10}}>Bus 01</Text>
      <Text style={styles.journey}>Noida to Shalimaar Bagh</Text>
      <Text style={{color: '#000',fontFamily: 'GothamBook',marginTop:4,paddingLeft: 10}}>01:00PM to 03:00PM </Text>
      </View>
      <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
      <View style={{marginHorizontal: 10,flexDirection: 'row',alignItems: 'center',paddingBottom: 20}}>
        <Image source={require('../assets/images/loc.png')}/>
      <Text style={{color: '#000',fontFamily: 'GothamBold',marginTop:4,textAlignVertical: 'center',marginHorizontal:3}}>Shalimaar Bus Station</Text>
      </View>
      <View >
      <Image source={require('../assets/images/locBlack.png')} style={{marginHorizontal: 12}}/>
      </View>
        
      </View>
    </View>



    </View>
    </View>
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
    
  }

})

export default Home;