import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'

const {height,width} = Dimensions.get('window')

type BreakProp = {
    breakNO: number,
    destination : string,
    arrivalMessage : string,
}
const Card2 = (prop : BreakProp) => {
  return (
    <View style={styles.card3}>
      <View>
      <Text style={{color: '#000',fontFamily: 'GothamBook',paddingTop: 15,paddingLeft: 10}}>Break {prop.breakNO}</Text>
      <Text style={styles.journey}>{prop.destination}</Text>
      </View>
      <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
      <View style={{marginHorizontal: 10,flexDirection: 'row',alignItems: 'center',paddingBottom: 10}}>
        <Image source={require('../assets/images/Vector.png')}/>
      <Text style={{color: '#000',fontFamily: 'GothamBold',marginTop:4,textAlignVertical: 'center',margin:5}}>{prop.arrivalMessage}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../assets/images/locBlack.png')} style={{marginRight: 12,marginBottom:6}}/>
      </View>
        
      </View>
    </View>
  )
}

export default Card2

const styles = StyleSheet.create({
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
})