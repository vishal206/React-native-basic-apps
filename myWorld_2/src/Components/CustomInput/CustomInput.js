import React from 'react'
import {View, Text, StyleSheet, TextInput } from 'react-native'

const CustomInput = () =>{
    return(
        <View  style={styles.container}>
            <TextInput style={styles.input
            }
            autoCapitalize="characters"
            />
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    borderColor:'black',
    borderWidth:2,
    width:'100%',
    
},
input:{
    color:'black',
    fontSize:25,
    paddingLeft:10,
    fontWeight:'800'
}
});

export default CustomInput