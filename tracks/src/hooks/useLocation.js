import {useState, useEffect} from 'react'
import {Accuracy, requestPermissionAsync,watchPositionAsync} from 'expo-location'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
export default (shouldTrack,callback)=>{
    const [err,setErr] = useState(null);
    const [location,setLocation] = useState(null);
   
   const  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErr('Location access Permission is not granted. Please enable it.');
    }else{
      setErr(null);
    }

    let location = await Location.getCurrentPositionAsync({});
     setLocation(location );
  };
    
   

    useEffect(() => {
    //const [subscriber,setSubscriber] = useState(null);
    let subscriber;
    const startWatching = async () =>{
    try {
      await _getLocationAsync();
      subscriber =  await watchPositionAsync({
        accuracy:Accuracy.BestForNavigation,
        timeInterval:1000,
        distanceInterval:10,
      },
      callback
      );
    
    } catch (error) {
      setErr(error);
    }
  }

        if(shouldTrack){
            startWatching();
         }else{
           if(subscriber){
             subscriber.remove();
            }
            subscriber = null;
    }
    return ()=>{
      if(subscriber){
         subscriber.remove();
      }
    }
  }, [shouldTrack,callback]) ;

  return [err,location]
} ;