import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { Background } from '../components/Background';
import { theme } from '../global/styles/theme';

export function AuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Background>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: theme.colors.secondary100,
          },
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </Background>
  );
}
