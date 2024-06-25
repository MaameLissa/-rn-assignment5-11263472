// src/navigation/BottomTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
// import TransactionsScreen from '../screens/TransactionsScreen';
// import MyCardsScreen from '../screens/MyCardsScreen';
// import StatisticsScreen from '../screens/StatisticsScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Transactions':
                iconName = 'swap-horizontal-outline';
                break;
              case 'My Cards':
                iconName = 'card-outline';
                break;
              case 'Statistics':
                iconName = 'stats-chart-outline';
                break;
              case 'Settings':
                iconName = 'settings-outline';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
        <Tab.Screen name="My Cards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
