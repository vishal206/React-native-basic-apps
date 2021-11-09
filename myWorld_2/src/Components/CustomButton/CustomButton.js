import React from 'react'
import {View, Text, StyleSheet, Button, Pressable } from 'react-native'

const CustomButton = () =>{
    return(
        
            <Pressable style={styles.container}>
                <Text style={styles.text}>Say Hello!</Text>
            </Pressable>
    )
}

const styles = StyleSheet.create({
container:{ 
    backgroundColor:'black',
    width:'100%',
    marginTop:12,
    borderRadius:5,
    alignItems:'center',
    paddingVertical:20
},
text:{ 
    color:'white',
    fontWeight:'200',
    fontSize:20
}
});

export default CustomButton