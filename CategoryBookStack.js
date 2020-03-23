import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import BookScreen from './screens/BookScreen';
import ContentScreen from './screens/ContentScreen';

const CategoryStack = createStackNavigator();

export default class CategoryBookStack extends React.Component {
  render() {
    return (
      <CategoryStack.Navigator >
        <CategoryStack.Screen name = "Home" component = {CategoriesScreen} />
        <CategoryStack.Screen name = "BookScreen" component = {BookScreen} options={({ route }) => ({ title: route.params.name })}/>
        <CategoryStack.Screen name = "ContentScreen" component = {ContentScreen}/>
      </CategoryStack.Navigator>
  )
  }
}
