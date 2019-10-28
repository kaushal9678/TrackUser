import React from 'react';
import {Text } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigator from './src/navigation/Navigator';
import {Provider as AuthProvider} from './src/context/AuthContext'
import {setNavigator} from './src/navigation/navigationRef'
import {Provider as LocationProvider} from './src/context/LocationContext'
import {Provider as TrackProvider} from './src/context/TrackContext'
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
const App =()=>{
  return (
  <PaperProvider theme={theme}>
  <TrackProvider>
    <LocationProvider>
      <AuthProvider>
          <Navigator ref={(navigator)=>{setNavigator(navigator)}}/>
     </AuthProvider>
     </LocationProvider>
     </TrackProvider>
  </PaperProvider>
  )
}
export default App;