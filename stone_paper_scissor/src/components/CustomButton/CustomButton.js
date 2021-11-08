import React from 'react'
import {View, Text, StyleSheet, Pressable } from 'react-native'

const customButton = ({onPress, text}) =>{
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:'#E7E4DE',
    alignItems:'center',
    padding:15,
    borderRadius:50,
    margin:15
},
text:{
    fontSize:20
}
});

export default customButton