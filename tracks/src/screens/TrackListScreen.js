import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { View,StyleSheet,Text,FlatList, TouchableOpacity} from 'react-native';
import {NavigationEvents} from 'react-navigation'
import {Context as TrackContext} from '../context/TrackContext'
import {ListItem} from 'react-native-elements'
const TrackListScreen =({navigation})=>{

const {state,fetchTracks} = useContext(TrackContext);

renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>
    navigation.navigate('TrackDetail',{_id:item._id})
    }>
         <ListItem
             title={item.name}
             bottomDivider
             chevron
        />
  </TouchableOpacity>
)

//console.log("state==",state);
    return <>
          <NavigationEvents onWillFocus={fetchTracks}/>
             
          
             <FlatList data={state} 
             keyExtractor={item=>item._id}
             renderItem={renderItem}
             
             />
          
    
    </>

}

const style = StyleSheet.create({

});

TrackListScreen.navigationOptions=()=>{
    return {
        title:'Tracks'
    }
}
export default TrackListScreen;