import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import createDataContext from './createDataContext'
import trackerAPI from '../api/tracker'
import {navigate} from '../navigation/navigationRef'

const authReducer = (state,action)=>{
    switch (action.type) {
      
        case 'signin':
       return {token:action.payload, errorMessage: ''};
       case 'add_error':
            return {...state,errorMessage:action.payload,};
        case  "clear_error_message":
             return {...state,errorMessage:''}
        default:
          return state;
            break;
    }
}

clearErrorMessage=dispatch=>()=>{
dispatch({type:'clear_error_message'});
}

const signup = (dispatch)=>{
    return async({email,password})=>{
        console.log({emai:email,password:password});
        // make api request with email and password
            try {
                const response = await trackerAPI.post('/signup',{email,password});
               await AsyncStorage.setItem('token',response.data.token);
                dispatch({type:'signin',payload:response.data.token});
                navigate('TrackList')
            } catch (error) {
                console.log(error.response.data);
                dispatch({type:'add_error',payload:'Something went wrong with sign up'})
            }
        // if we signup, modify our state, and say that we are authenticated

        //if signing up fails, we probably need to reflect an error message somewhere
    }
}

const signin = dispatch=> async({email,password})=>{
        console.log({emai:email,password:password});
        // make api request with email and password
            try {
                const response = await trackerAPI.post('/signin',{email,password});
               await AsyncStorage.setItem('token',response.data.token);
                dispatch({type:'signin',payload:response.data.token});
                navigate('TrackList')
            } catch (error) {
                console.log(error.response.data);
                dispatch({type:'add_error',payload:'Something went wrong with sign in'})
            }
        // if we signup, modify our state, and say that we are authenticated

        //if signing up fails, we probably need to reflect an error message somewhere
    
}


const signout = (dispatch)=>{
    return ()=>{
        // signout
        
         }
}
export const {Provider,Context} = createDataContext(authReducer,{signin,signout,signup,clearErrorMessage}, {token:null,errorMessage:""})