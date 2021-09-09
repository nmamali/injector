import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { View,Text,Button, StyleSheet } from 'react-native';
import BleManager from 'react-native-ble-manager';




function App () {
        return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    );
}

export default App;
