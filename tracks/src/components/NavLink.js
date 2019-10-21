import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import Spacer from './Spacer'
import {withNavigation} from 'react-navigation' // use withNavigation when you need a navigation prop in reusable component or 2nd way pass navigation prop from parent component
const NavLink =({navigation,text, routeName})=>{
    return <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
          <Spacer>
            <Text style = {styles.textColor}>{text}</Text>
             </Spacer>
         </TouchableOpacity>
}

const styles= StyleSheet.create({
textColor:{
    color:'blue',
    fontSize:18
},
})

export default withNavigation(NavLink);