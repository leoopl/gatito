import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Services from './screens/Services';
import Car from './screens/Car';
import {cores} from './styles'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: cores.roxo,
                    tabBarInactiveTintColor: cores.claro,
                    tabBarActiveBackgroundColor: cores.roxo,
                    tabBarInactiveBackgroundColor: cores.laranja,
                    tabBarLabelStyle: {
                      fontWeight: 'bold',
                      fontSize: 16,
                      textAlignVertical: 'center',
                      height: '95%',
                      width: '100%',
                      backgroundColor: cores.laranja,
                    },
                  }}>
                <Tab.Screen name='Services' component={Services} />
                <Tab.Screen name='Car' component={Car} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
