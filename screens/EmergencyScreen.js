import React from 'react';
import { View,Text,Button, StyleSheet } from 'react-native';


const EmergencyScreen = ({navigation}) => {

    return(
        <View style = {styles.container}>
            <Text>EmergencyScreen Screen</Text>
        </View>
    );


}

export default EmergencyScreen;


const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


});