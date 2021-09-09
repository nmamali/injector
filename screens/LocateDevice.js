import React from 'react';
import { View,Text,Button, StyleSheet } from 'react-native';
import MyLocation from '../Components/GetLocation';



const LocateDevice = ({navigation}) => {

    return(
        <View style={styles.container}>
         <MyLocation />
        </View>
    );
}


export default LocateDevice

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});