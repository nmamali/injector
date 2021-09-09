import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'; 
import React from 'react';
import HomeScreen from '../screens/HomeScreen'
import EmergencyScreen from '../screens/EmergencyScreen'
import AddUserScreen from '../screens/AddUserScreen'
import ChatScreen from '../screens/ChatScreen'
import SettingsScreen from '../screens/SettingsScreen'
//import React from 'react';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} /> 
            <Tab.Screen name="Emergency" component={EmergencyScreen} /> 
            <Tab.Screen name="Chat" component={ChatScreen} />

        </Tab.Navigator>

    );

}

export default Tabs