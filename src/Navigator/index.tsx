import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './TabNavigator';

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
