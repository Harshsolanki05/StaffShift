// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyShiftsScreen from '../screens/MyShiftsScreen';
import AvailableShiftsScreen from '../screens/AvailableShifts';
import { StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="My Shifts"
      component={MyShiftsScreen}
      options={{
        tabBarIcon: () => null,
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.labelFocused : styles.label}>
            My Shifts
          </Text>
        ),
      }}
    />
    <Tab.Screen
      name="Available Shifts"
      component={AvailableShiftsScreen}
      options={{
        tabBarIcon: () => null,
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.labelFocused : styles.label}>
            Available Shifts
          </Text>
        ),
      }}
    />

  </Tab.Navigator>
);

export default TabNavigator;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: 'gray',
    height: '100%',
    textAlignVertical: 'center'
  },
  labelFocused: {
    fontSize: 16,
    color: colors.blue,
    fontWeight: '500',
    height: '100%',
    textAlignVertical: 'center'
  },
});


