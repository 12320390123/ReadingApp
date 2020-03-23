import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryBookStack from './CategoryBookStack';
import ReadingListScreen from './screens/ReadingListScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';



const MyApp = createBottomTabNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyApp.Navigator initialRouteName = "Home" tabBarOptions = {{ activeTintColor: '#e91e63', }}>
          <MyApp.Screen name = "Home" component = {CategoryBookStack} 
            options = {{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "home" color = {color} size = {size} />
          ),
        }}/>
          <MyApp.Screen name = "Reading List" component = {ReadingListScreen} 
            options = {{ tabBarLabel: 'Reading List', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "book-open-outline" color = {color} size = {size} />
          ),
        }}/>
          <MyApp.Screen name = "Profile" component = {ProfileScreen} 
            options = {{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "account" color = {color} size = {size} />
          ),
        }}/>
          <MyApp.Screen name = "Setting" component = {SettingScreen} 
            options = {{ tabBarLabel: 'Setting', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name = "hammer" color = {color} size = {size} />
          ),
        }}/>
        </MyApp.Navigator>
      </NavigationContainer>
    );
  }
}