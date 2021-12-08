/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#ffffff',
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.col}>
        <Image
          source={require('./assets/illustration.jpg')}
          style={{width: 350, height: 350}}
        />
        <Text style={styles.heading}>Time to meditate</Text>
        <Text style={styles.heading_2}>
          Take a breath, {'\n'} and ease your mind
        </Text>
        <TouchableOpacity activeOpacity={0.95} style={styles.button}>
          <Text style={styles.text}>Let's get started</Text>
        </TouchableOpacity>
      </View>
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
