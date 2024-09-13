import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {AuthScreen} from '../screens/auth';
import {AvoidSoftInput} from 'react-native-avoid-softinput';
import {useFocusEffect} from '@react-navigation/native';
import {useIsAuthenticated} from '../store/slices/auth.slice.ts';
import {SuccessScreen} from '../screens/success/SuccessScreen.tsx';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);

    return () => {
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  }, []);

  useFocusEffect(onFocusEffect);

  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {AppNavigator};
