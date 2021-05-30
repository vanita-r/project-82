import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import customSideBarMenu from './customSideBarMenu';
import { AppTabNavigator } from './AppTabNavigator'
import tabNavigator from '../App';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen
    },
  Exchange : {
    screen : ExchangeScreen
  },
  Setting : {
    screen : SettingsScreen
  }
},
  {
    contentComponent:customSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
