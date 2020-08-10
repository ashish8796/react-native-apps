import AsyncStorage from '@react-native-community/async-storage';

export const getItem = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export const setItem = async (key: string, value: any) => {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
};
