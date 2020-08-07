import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({index, currentIndex}: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View style={[styles.dots, {opacity, transform: [{scale}]}]} />
  );
};

const styles = StyleSheet.create({
  dots: {
    borderColor: '#fff',
    borderWidth: 2,
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 6,
    backgroundColor: 'white',
    opacity: 0.5,
  },

  dotsFirstChild: {
    backgroundColor: '#fff',
    opacity: 1,
    transform: [{scale: 1.25}],
  },
});

export default Dot;
