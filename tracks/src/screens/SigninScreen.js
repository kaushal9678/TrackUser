import React, {useState,useContext } from 'react';
import PropTypes from 'prop-types';
import {NavigationEvents} from 'react-navigation';
import {View, StyleSheet} from 'react-native';

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context as AuthContext} from '../context/AuthContext'
const SigninScreen =({navigation})=>{

    const {state,signin,clearErrorMessage} = useContext(AuthContext);
    return( 
         <View style={styles.container}>
         <NavigationEvents 
         onWillFocus={()=>{}}
         onDidFocus={()=>{}}
         onWillBlur={clearErrorMessage}
        
         />
         <AuthForm 
         headerText="Sign In to your Account" 
         submitButtonText="Sign In"
         errorMessage={state.errorMessage}
        //1st way
        // onSubmit={({email,password})=>signup({email,password})}

        //2nd way
            onSubmit={signin}
         />
         <NavLink routeName="SignUp" text="Don't have an account? Go Back and Sign up!"/>
        
    
    </View>
    )
}
const styles = StyleSheet.create({
container:{
    //alignItems: 'center',
    justifyContent: 'center',
    flex:1,
   // borderColor:'red',
   // borderWidth: 10,
    marginBottom: 250,
},

});
SigninScreen.navigationOptions=()=>{
    return{
        header:null
    }
} 
export default SigninScreen;