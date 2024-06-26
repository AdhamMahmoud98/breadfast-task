import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { HomeWindow } from './src/windows/homeWindow';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/state/store';
import { PostWindow } from './src/windows/postWindow';
import { SplashWindow } from './src/windows/splashWindow';


const Stack = createNativeStackNavigator();


const App = (): React.JSX.Element => {


  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashWindow} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeWindow} />
        <Stack.Screen name="Post" component={PostWindow} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
