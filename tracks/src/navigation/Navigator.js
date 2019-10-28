import React from 'react';
import {Text, StyleSheet} from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator , createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import AccountScreen from '../screens/AccountScreen'
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen'
import ResolveAuthScreen from '../screens/ResolveAuthScreen'
import {FontAwesome} from '@expo/vector-icons'
const trackListFlow = createStackNavigator({
      TrackList:TrackListScreen,
      TrackDetail:TrackDetailScreen
    })
    trackListFlow.navigationOptions={
      title:'Tracks',
      tabBarIcon:<FontAwesome  name="th-list" size={20} color="white"/>
    }
const switchNavigator =  createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow:createStackNavigator({
    SignUp:SignupScreen,
    SignIn:SigninScreen,
  }),
  mainFlow:createMaterialBottomTabNavigator({
    trackListFlow:trackListFlow,
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen,

  },

  )
})

//const App = createAppContainer(switchNavigator)
export default createAppContainer(switchNavigator);
