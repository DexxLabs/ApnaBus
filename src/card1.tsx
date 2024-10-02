import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
const {height,width} = Dimensions.get('window')



type CardProps = {
    source : string,
    destination : string,
    busNo : number,
    location : string,
    departure : string,
    arrival : string
}
const card1 = (prop:CardProps) => {
  return (
    <View style={styles.card2}>
    <View>
    <Text style={{color: '#000',fontFamily: 'GothamBook',paddingTop: 15,paddingLeft: 10}}>Bus 0{prop.busNo}</Text>
    <Text style={styles.journey}>{prop.source} to {prop.destination}</Text>
    <Text style={{color: '#000',fontFamily: 'GothamBook',marginTop:4,paddingLeft: 10}}>{prop.departure} to {prop.arrival} </Text>
    </View>
    <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
    <View style={{marginHorizontal: 10,flexDirection: 'row',alignItems: 'center',paddingBottom: 20}}>
      <Image source={require('../assets/images/loc.png')}/>
    <Text style={{color: '#000',fontFamily: 'GothamBold',marginTop:4,textAlignVertical: 'center',marginHorizontal:3}}>{prop.location}</Text>
    </View>
    <View>
      <View >
    <Image source={require('../assets/images/locBlack.png')} style={{marginHorizontal: 12}}/>
      </View>
    </View>
      

      
    </View>
  </View>
  )
}

export default card1

const styles = StyleSheet.create({
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
      }
})