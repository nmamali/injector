import { Component } from "react";
import { StyleSheet, Text, View,Dimensions, TouchableOpacity, Button } from 'react-native';
import React from "react";
import GetLocation from 'react-native-get-location';

class FindDevice extends Component {
    render() {

      return (
          
        <View style = {styles.container}>
              <View style={[styles.bcolor]}>

                <TouchableOpacity onPress={()=>{alert("pressed Find")}} >
                  <View style={styles.butBox} >
                      <Text style={styles.mytext} >Find Device</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{alert("pressed Connect")}} >
                <View style={styles.Connect} ><Text>Hi</Text></View>
                </TouchableOpacity>
              
              </View>
        </View>
           
      );
    }
  }
   
  
  export default FindDevice;

  const styles = StyleSheet.create({

    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    butBox: {
      backgroundColor: "#E02F26",
      margin: 80,
      justifyContent: "center",
      alignItems: 'center',
      height: 200,
      width: 200,
      borderRadius: 100,
      shadowColor: "#fff",
  
    shadowOffset: {
      width: 1,
      height: 1,
      },
      shadowOpacity: 3,
      shadowRadius: 10,
    },
    Connect:{
      backgroundColor: "#000000",
      marginLeft: 130,
      justifyContent: "center",
      height: 100,
      width: 100,
      borderRadius: 50,
      alignItems: 'center'
    }
  });