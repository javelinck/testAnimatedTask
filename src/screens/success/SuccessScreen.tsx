import {Text, TouchableOpacity, View} from 'react-native';
import {AnimatedComponent} from '../../components/animated-component';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useCallback} from 'react';
import {useAppDispatch} from '../../store/hooks/hooks.ts';
import {setIsAuthenticated} from '../../store/slices/auth.slice.ts';
import {TextComponent} from '../../components/text-component/TextComponent.tsx';
import {ButtonComponent} from '../../components/button-component';

const SuccessScreen = () => {
  const dispatch = useAppDispatch();

  const handleGoBack = useCallback(() => {
    dispatch(setIsAuthenticated(false));
  }, []);

  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
      }}>
      <View style={{margin: 20}}>
        <TextComponent isHeader text="Success" />
        <TextComponent text="Validation was successfully." />
      </View>
      <AnimatedComponent />
      <ButtonComponent label="Go Back" onPress={handleGoBack} />
    </SafeAreaView>
  );
};

export {SuccessScreen};
