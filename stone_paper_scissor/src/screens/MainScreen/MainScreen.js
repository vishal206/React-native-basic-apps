//rncs
import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

const MainScreen = () =>{
    return(
        <View>
            <Text style={styles.myText}>Main screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    myText:{
        backgroundColor:'white',
        color: 'black'
    }
});

export default MainScreen