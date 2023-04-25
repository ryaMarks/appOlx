import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/*Importa as paginas de navegação*/
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Chat from './pages/Chat';
import Notificações from './pages/Notificações';
import Profile from './pages/Usuario';

import {Entypo, Feather, AntDesign, Ionicons} from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#6d0ad6',
                    borderTopColor: 'transparent',
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#b2b8c2',
                tabBarIconStyle:{
                    paddingBottom: 5,
                    paddingTop: 5,
                }
            }}
        >
            <Tab.Screen
              name="Menu" 
              component={Home}
              options={{
                headerTransparent: true,
                headerShadow: false,
                headerTitle: '',
                tabBarIcon: ({size, color}) => (
                    <Entypo name='home' size={size} color={color} />
                )
              }}
            />
            <Tab.Screen  
                name="Favoritos" 
                component={Favoritos}
                options={{
                    headerTitle: '',
                    headerTransparent: true,
                    headerShadow: false,
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name='heart' size={size} color={color} /> 
                    )
                  }}
            />
            <Tab.Screen 
                name="Chat" 
                component={Chat}
                options={{
                    headerTitle: '',
                    headerTransparent: true,
                    headerShadow: false,
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="chat" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen  
                name="Notificações" 
                component={Notificações}
                options={{
                    headerTitle: '',
                    headerTransparent: true,
                    headerShadow: false,
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name='notifications-outline' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen  
                name="Usuario" 
                component={Profile}
                options={{
                    headerTitle: '',
                    headerTransparent: true,
                    headerShadow: false,
                    tabBarIcon: ({size, color}) => (
                        <Feather name='user' size={size} color={color} />
                    )
                }}
            />
            
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '10'
    }
});