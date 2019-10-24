import React, { Componentm,Fragment,useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import SigninScreen from './SigninScreen';
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
const SignupScreen =({navigation})=>{

    const {state,signup,clearErrorMessage} = useContext(AuthContext);


   // console.log("state==",state);
    return(
        <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage}/>
         <AuthForm
         headerText="Sign Up for Tracker"
         submitButtonText="Sign Up"
         errorMessage={state.errorMessage}
        //1st way
        // onSubmit={({email,password})=>signup({email,password})}

        //2nd way
            onSubmit={signup}
         />
         <NavLink routeName="SignIn" text="Already have an account? Sign in instead!"/>


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
SignupScreen.navigationOptions=()=>{
    return{
        header:null
    }
}
export default SignupScreen;
