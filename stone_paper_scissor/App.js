/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MainScreen from './src/screens/MainScreen';

const App = () => {
  return (  
    <SafeAreaView style={styles.root}>
    <StatusBar backgroundColor='#6E8F85'
    />
      <MainScreen/>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#6E8F85',
  },
});

export default App;
