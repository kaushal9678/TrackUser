import React, { useContext,Fragment } from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet,Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {FontAwesome} from '@expo/vector-icons'
import {Context as AuthContext} from '../context/AuthContext'
const AccountScreen =()=>{
  const {signout} = useContext(AuthContext);
    return <SafeAreaView forceInset={{top:'always'}}>
    <Spacer/>
    <Text>Account Screen</Text>
    <Spacer>
    <Button title="Sign Out" onPress={signout}/>
    </Spacer>
    </SafeAreaView>


}
const style = StyleSheet.create({

});

AccountScreen.navigationOptions = {
  title: 'Profile',
  tabBarIcon:<FontAwesome name='gear' size={20} color="#fff"/>
}
export default AccountScreen;
