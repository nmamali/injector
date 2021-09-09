import React, { Component } from 'react';
import { View,Text,Button, StyleSheet } from 'react-native';


class AutoInjector extends Component {

    state = {

        ready: false,
        timeElapse: 0

    }

    isAiON = () => {
        if(ready){

            while(ready){
                timeElapse+=1;
    
            }

        }else{

        }
   }
}


export default AutoInjector

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});