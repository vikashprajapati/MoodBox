import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.col}>
      <Image
        source={require('./assets/images/illustration.png')}
        style={{width: 350, height: 350}}
      />
      <Text style={styles.heading}>Time to meditate</Text>
      <Text style={styles.heading_2}>
        Take a breath, {'\n'} and ease your mind
      </Text>
      <TouchableOpacity
        activeOpacity={0.95}
        style={styles.button}
        activeOpacity={0.6}>
        <Text style={styles.text}>Let's get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Splash;
