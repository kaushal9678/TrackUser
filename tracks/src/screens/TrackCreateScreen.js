//import '../_mockLocation';
import React, {useEffect,useState,useContext,useCallback } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,SafeAreaView} from 'react-native';
import {NavigationEvents, withNavigationFocus} from 'react-navigation'
import Map from '../components/Map';
import {Text} from 'react-native-elements'
import {FontAwesome} from '@expo/vector-icons'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

//import * as Location from 'expo-location';
import {Context as LocationContext} from '../context/LocationContext'

const TrackCreateScreen =({isFocused})=>{

  const {state:{recording},addLocation} = useContext(LocationContext);
 const callBack = useCallback(location=>{
         addLocation(location,recording);
    },[recording]);
 
 /*  const [err,location] = useLocation((location)=>{
      addLocation(location);
  }) */

const [err,location] = useLocation(isFocused || recording,callBack);

  
  return <SafeAreaView forceInset={{top:'always'}}>
      <Text h4>Create a track</Text>
      <Map/>
        {/*used isFocused from with withNavigationFocus*/}
    {/*   <NavigationEvents onWillBlur={()=>console.log("Leaving")}/> */} 
  
      {err ? <Text>Please enable location services</Text>: null}
      <TrackForm/>
    </SafeAreaView>
}

const style = StyleSheet.create({

});

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon:<FontAwesome name='plus' size={20} color="#fff"/>
}
export default withNavigationFocus(TrackCreateScreen);
