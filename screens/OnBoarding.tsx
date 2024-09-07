import { StyleSheet, Text, View,StatusBar, Image, Pressable,Dimensions } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
const {height,width} = Dimensions.get('window')


type Props = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

const OnBoarding = ({navigation}: Props) => {

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
                <Image source={require("../assets/images/parvahan.png")} style={styles.image}/>
            </View>
            <View style={styles.TextHandler}>
                {/* <Text style={styles.descText}>Automated Bus Scheduling and Route Managment System for Delhi Transport Communication</Text> */}
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

export default OnBoarding

const styles = StyleSheet.create({
    wrapper:{
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
    }
})