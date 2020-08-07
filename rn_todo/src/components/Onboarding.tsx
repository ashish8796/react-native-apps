import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import SvgComponent from './../assests/svg/OnboardingIcon';

const {width} = Dimensions.get('screen');

function Onboarding({navigation}) {
  const textArr = [
    'Very simple Things To-Do List. Helps you to manage yourdaily life,without any hassle!',
    'Hard work always pays.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  ];

  const handleScroll = () => {};

  return (
    <>
      <View style={styles.upper}>
        <Text style={styles.welcome}>Hi there! Welcome to</Text>
        <Text style={styles.text}>TTD</Text>
      </View>
      <View style={styles.motive}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}>
          {textArr.map((text, index) => (
            <View style={styles.page} key={index}>
              <Text style={styles.info}>{text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.motiveDots}>
        <View style={[styles.dots, styles.dotsFirstChild]} />
        <View style={styles.dots} />
        <View style={styles.dots} />
      </View>

      <View style={styles.lower}>
        <SvgComponent />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('AddTodo');
          }}>
          <Text style={styles.skip}>SKIP</Text>
        </TouchableWithoutFeedback>
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
    marginTop: 36,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },

  welcome: {
    marginTop: 60,
    fontSize: 17,
    color: '#ffffff',
  },

  motive: {
    height: 80,
    backgroundColor: '#140A26',
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
    fontSize: 14,
    color: '#ADADAD',
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  motiveDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#140A26',
    paddingBottom: 20,
  },

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

  skip: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '700',
    marginTop: 40,
  },
});

export default Onboarding;
