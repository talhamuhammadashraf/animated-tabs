/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import {event, profile} from '../../Assets';
import {afterPartyPink, black, noghreiSilver, white} from '../../Theme/color';
import styles from './styles';
import ProfileScreen from '../../Screens/Profile';
import HeaderRight from '../../Components/HeaderRight';
import EventsScreen from '../../Screens/Events';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBG,
        headerShadowVisible: false,
        headerStyle: styles.tabBG,
        headerTintColor: white,
        headerTitleAlign: 'left',
        headerTitleStyle: styles.headerTitle,
        headerRight: () => <HeaderRight />,
        tabBarLabel: ({focused, children}) => (
          <Text
            style={[styles.label, {color: focused ? noghreiSilver : black}]}>
            {children}
          </Text>
        ),
      }}>
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={event}
              resizeMode="contain"
              tintColor={focused ? afterPartyPink : white}
            />
          ),
        }}
      />
      {/* Add more tabs here*/}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={profile}
              resizeMode="contain"
              tintColor={focused ? afterPartyPink : white}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
