/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App=()=>{
  const[text,setText]=useState('WORLD');
  
  return(
    <View style={styles.container}>
      <Text style={styles.mytext}>HELLO {text}</Text>
      <View>
      <TextInput style={styles.myTextInput}
      placeholderTextColor='grey'
      autoCapitalize="characters"
      onChangeText={text => setText(text)}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
  },
  mytext:{
    color: 'black',
    fontSize: 30,
    fontWeight:'200',
    textAlign:'center',
    marginBottom: 20,
    letterSpacing: 4
  },
  myTextInput:{
    color:'black',
    fontSize: 30,
    borderWidth:1,
    textAlign:'center',
    marginHorizontal:10,
    fontWeight:'900',
  }
});

export default App;
