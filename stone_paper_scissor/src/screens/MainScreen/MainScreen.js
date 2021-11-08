//rncs
import React,{useState} from 'react';
import {View, Text, StyleSheet, Image ,useWindowDimensions} from 'react-native';
import boy from '../../../assets/images/boy.png';
import CustomButton from '../../components/CustomButton';

const MainScreen = () =>{
    const {height} = useWindowDimensions();
    const [playText,setText] = useState("Make your move");
    var x;
    //1->stone , 2 -> papper, 3 -> scissor
    const onStonePressed =()=>{
        x=1;
        computerDecide();
    }
    const onPapperPressed =()=>{
        x=2;
        computerDecide();
    }
    const onScissorPressed =()=>{
        x=3;
        computerDecide();
    }

    const computerDecide=()=>{
        var y=Math.floor((Math.random() * 3) + 1);;
        // console.warn(y);
        if(x===y){
            if(x===1)
            setText("both choose stone");
            else if(x===2)
            setText("both choose papper");
            else if(x===3)
            setText("both choose scissor");
        }
        else{
            if(x===1)
            {
                if(y===2)
                setText("computer choose paper,\n You LOOSE");
                else if( y===3 )
                setText("computer choose scissor,\n You WON");
            }
            else if(x===2){
                if(y===1)
                setText("computer choose stone,\n You WON");
                else if(y===3)
                setText("computer choose scissor,\n You LOOSE");
            }
            else if(x==3){
                if(y===1)
                setText("computer choose stone,\n You LOOSE");
                else if(y===2)
                setText("computer choose paper,\n You WON");
            }
        }
        
    }
    return(
        <View style={styles.root}>
            <Image source={boy} style={styles.myImage} resizeMode='contain'/>
            <Text style={styles.myText}>{playText}</Text>
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
        fontSize:20,
        textAlign:'center'
    },
    buttons:{
        flexDirection:'row',
    }
});

export default MainScreen