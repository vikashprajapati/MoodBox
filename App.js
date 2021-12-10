/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Splash from './screens/Splash';
import Home from './screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#ffffff',
    height: '100%',
  };

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  col: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    color: Colors.darker,
    fontWeight: 'bold',
    paddingTop: 32,
  },
  heading_2: {
    fontSize: 20,
    color: '#aaa',
    textAlign: 'center',
    paddingVertical: 16,
  },
  button: {
    flexDirection: 'row',
    height: 60,
    width: '80%',
    backgroundColor: '#82bf79',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    elevation: 3,
    borderRadius: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default App;
