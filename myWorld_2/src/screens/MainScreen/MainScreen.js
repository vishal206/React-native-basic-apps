import React from 'react'
import {View, Text, StyleSheet, TextInput } from 'react-native'
import CustomInput from '../../Components/CustomInput/CustomInput'
import CustomButton from '../../Components/CustomButton'

const MainScreen = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.myText} >Hello world</Text>
            <CustomInput></CustomInput>
            <CustomButton></CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
myText:{
    color:'black',
    fontWeight:'100',
    fontSize:40,
    marginTop:240,
    
},
container:{
    alignItems:'center',
    padding:20,
    
},
});

export default MainScreen