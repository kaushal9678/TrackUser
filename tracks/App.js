import React from 'react';
import {Text } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigator from './src/navigation/Navigator';
import {Provider as AuthProvider} from './src/context/AuthContext'
import {setNavigator} from './src/navigation/navigationRef'
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
      <AuthProvider>
          <Navigator ref={(navigator)=>{setNavigator(navigator)}}/>
     </AuthProvider>
  </PaperProvider>
  )
}
export default App;