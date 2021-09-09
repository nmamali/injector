import React from 'react';
import { View,Text,Button, StyleSheet } from 'react-native';
import FindDevice from '../Components/FindDevice';


const HomeScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
         <FindDevice />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    }
  });