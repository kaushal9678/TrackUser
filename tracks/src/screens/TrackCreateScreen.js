//import '../_mockLocation';
import React, {useEffect,useState,useContext } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,SafeAreaView} from 'react-native';
import Map from '../components/Map';
import {Text} from 'react-native-elements'
import {requestPermissionAsync, watchPositionAsync, Accuracy} from 'expo-location'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import {Context as LocationContext} from '../context/LocationContext'

const TrackCreateScreen =()=>{

  const {addLocation} = useContext(LocationContext);
  const [err,setErr] = useState(null);
 const [location,setLocation] = useState(null);

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErr('Location access Permission is not granted. Please enable it.');
    }else{
      setErr(null);
    }

    let location = await Location.getCurrentPositionAsync({});
     setLocation(location );
  };
  const startWatching = async () =>{
    try {
      await _getLocationAsync();
      await watchPositionAsync({
        accuracy:Accuracy.BestForNavigation,
        timeInterval:1000,
        distanceInterval:10,
      },(location)=>{
         addLocation(location);
      })
    } catch (error) {
      setErr(error);
    }
  } 
  useEffect(() => {
    startWatching();
  }, [])
    return <SafeAreaView forceInset={{top:'always'}}>
      <Text h4>Create a track</Text>
      <Map/>
      {err ? <Text>Please enable location services</Text>: null}
    </SafeAreaView>
}

const style = StyleSheet.create({

});
export default TrackCreateScreen;
