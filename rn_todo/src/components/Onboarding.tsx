import React, {useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import Animated from 'react-native-reanimated';
import SvgComponent from './../assests/svg/OnboardingIcon';
import Dot from './Dot';

const {width} = Dimensions.get('screen');

function Onboarding({navigation}) {
  const scrollX = useRef(new Animated.Value(0));

  const textArr = [
    'Very simple Things To-Do List. Helps you to manage yourdaily life,without any hassle!',
    'Hard work always pays.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  ];

  return (
    <>
      <View style={styles.upper}>
        <Text style={styles.welcome}>Hi there! Welcome to</Text>
        <Text style={styles.text}>TTD</Text>
      </View>
      <View style={styles.motive}>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX.current}}}],
            {
              useNativeDriver: true,
            },
          )}>
          {textArr.map((text, index) => (
            <View style={styles.page} key={index}>
              <Text style={styles.info}>{text}</Text>
            </View>
          ))}
        </Animated.ScrollView>
        <View style={styles.motiveDots}>
          {textArr.map((d, index) => {
            return (
              <Dot
                key={index}
                {...{
                  index,
                  currentIndex: Animated.divide(scrollX.current, width),
                }}
              />
            );
          })}
        </View>
      </View>

      <View style={styles.lower}>
        <View>
          <SvgComponent />
        </View>
        <View style={styles.skipContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('AddTodo');
            }}>
            <Text style={styles.skip}>SKIP</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  upper: {
    alignItems: 'center',
    backgroundColor: '#221738',
  },

  text: {
    marginTop: 25,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },

  welcome: {
    marginTop: 40,
    fontSize: 17,
    color: '#ffffff',
  },

  motive: {
    backgroundColor: '#140A26',
    paddingVertical: 30,
  },

  lower: {
    backgroundColor: '#140A26',
    flex: 1,
    alignItems: 'center',
  },

  page: {
    width,
    paddingHorizontal: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    fontSize: 16,
    color: '#ADADAD',
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  motiveDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#140A26',
    paddingVertical: 20,
  },
  skip: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '700',
    marginTop: 40,
  },
  skipContainer: {
    position: 'absolute',
    zIndex: 100,
    bottom: Platform.OS === 'ios' ? 50 : 30,
  },
});

export default Onboarding;
