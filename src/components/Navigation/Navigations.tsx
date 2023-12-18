import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../../screens/Home/Home';
import Favorites from '../../screens/Favorites/Favorites';
import ArtworkDetail from '../../screens/ArtworkDetail/ArtworkDetail';


const Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#ffffff',
        tabBarActiveBackgroundColor: '#ffffff',
        tabBarInactiveBackgroundColor: '#000000',
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name={'home'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <Icon name={'heart'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ArtworkDetail"
        component={ArtworkDetail}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
