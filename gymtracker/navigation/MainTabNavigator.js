import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FirstDay from '../screens/FirstDay';
import SecondDay from '../screens/SecondDay';
import ThirdDay from '../screens/ThirdDay';
import FourthDay from '../screens/FourthDay';
import FifthDay from '../screens/FifthDay';
import SixthDay from '../screens/SixthDay';


const FirstDayStack = createStackNavigator({
  First: FirstDay,
});

FirstDayStack.navigationOptions = {
  tabBarLabel: 'I',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SecondDayStack = createStackNavigator({
  Second: SecondDay,
});

SecondDayStack.navigationOptions = {
  tabBarLabel: 'II',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ThirdDayStack = createStackNavigator({
  Third: ThirdDay,
});

ThirdDayStack.navigationOptions = {
  tabBarLabel: 'III',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const FourthDayStack = createStackNavigator({
  Fourth: FourthDay,
});

FourthDayStack.navigationOptions = {
  tabBarLabel: 'IV',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const FifthDayStack = createStackNavigator({
  Fifth: FifthDay,
});

FifthDayStack.navigationOptions = {
  tabBarLabel: 'V',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SixthDayStack = createStackNavigator({
  Sixth: SixthDay,
});

SixthDayStack.navigationOptions = {
  tabBarLabel: 'VI',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  FirstDayStack,
  SecondDayStack,
  ThirdDayStack,
  FourthDayStack,
  FifthDayStack,
  SixthDayStack
});
