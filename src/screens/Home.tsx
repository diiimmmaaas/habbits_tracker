import {Animated, Text} from 'react-native';
import React from 'react';
import View = Animated.View;

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};
