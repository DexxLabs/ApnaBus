import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


type MainProps = {
    date : String,
    weather : string,
    taskRemaining : number
}
const MainCard = (props : MainProps) => {
  return (
    <View style={styles.card}>
        <View>
          <Text style={styles.cardText}>{props.date} </Text>
        </View>
        <View style={{flexDirection: 'row',marginLeft: 10,marginTop: 9}}>
          <Image source={require('../assets/images/moon.png')} style={{height:13,width:13}}/>
          <Text style={{fontFamily: 'GothamBold',color: '#fff',marginLeft: 4}}>{props.weather}</Text>
        </View>

      <View style={{marginTop: 10,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
        <View>
        <Text style={{fontFamily: 'GothamBold',color: '#fff',marginLeft:10,marginTop: 10,fontSize:12}}>Todays Task</Text>
        <Text style={{fontFamily: 'GothamBold',color: '#fff',marginLeft:10,fontSize: 20}}>You Have {props.taskRemaining} Shifts Today</Text>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Image source={require('../assets/images/arrow.png')} style={{marginHorizontal: 16}}/>
        </View>
      </View>
      </View>
  )
}

export default MainCard

const styles = StyleSheet.create({
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
})