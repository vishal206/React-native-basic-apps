//rncs
import React from 'react';
import {View, Text, StyleSheet, Image ,useWindowDimensions} from 'react-native';
import boy from '../../../assets/images/boy.png';
import CustomButton from '../../components/CustomButton';

const MainScreen = () =>{
    const {height} = useWindowDimensions();

    const onStonePressed =()=>{
        console.warn("stone");
    }
    const onPapperPressed =()=>{
        console.warn("papper");
    }
    const onScissorPressed =()=>{
        console.warn("scissor");
    }
    return(
        <View style={styles.root}>
            <Image source={boy} style={styles.myImage} resizeMode='contain'/>
            <Text style={styles.myText}>Make your move</Text>
            <View style={styles.buttons}>
            <CustomButton text="✊" onPress={onStonePressed}/>
            <CustomButton text="✋" onPress={onPapperPressed}/>
            <CustomButton text="✌️" onPress={onScissorPressed}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:30,
    },
    myImage:{
        width:"80%",
        height:"60%",
        marginLeft:40,
    },
    myText:{
        color: '#2D384C',
        marginVertical:50,
        fontFamily:"anonymousbold",
        fontSize:20
    },
    buttons:{
        flexDirection:'row',
    }
});

export default MainScreen