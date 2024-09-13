import {Controller, useForm} from 'react-hook-form';
import {AuthFormType} from '../../types/auth-form.type.ts';
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useCallback, useRef} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {AnimatedComponent} from '../../components/animated-component';
import {validation} from '../../helpers/validation.helper.ts';
import {useCreateUserMutation} from '../../store/services/auth.api.ts';
import {useAppDispatch} from '../../store/hooks/hooks.ts';
import {setIsAuthenticated} from '../../store/slices/auth.slice.ts';
import {TextComponent} from '../../components/text-component/TextComponent.tsx';
import {ButtonComponent} from '../../components/button-component';
import styles from './styles.ts';
import {SafeAreaView} from 'react-native-safe-area-context';

const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<AuthFormType>({
    defaultValues: {email: '', name: ''},
    mode: 'onChange',
    resolver: yupResolver(validation.confirmForm),
  });

  const [create] = useCreateUserMutation();

  const refName = useRef<TextInput>(null);

  const handleApply = useCallback(async (data: AuthFormType) => {
    try {
      const response = await create(data).unwrap();

      dispatch(setIsAuthenticated(response.isSuccess));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.margin}>
          <TextComponent isHeader text="Test form" />
          <TextComponent
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </View>
        <AnimatedComponent />
        <View style={styles.margin}>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange}}) => (
              <>
                <TextInput
                  onSubmitEditing={() => refName.current?.focus()}
                  onChangeText={onChange}
                  style={styles.textInput}
                  placeholder="Email"
                  keyboardType="email-address"
                />
                <TextComponent isError text={errors.email?.message ?? ''} />
              </>
            )}
          />

          <Controller
            control={control}
            name="name"
            render={({field: {onChange}}) => (
              <>
                <TextInput
                  onChangeText={onChange}
                  ref={refName}
                  style={styles.textInput}
                  placeholder="Name"
                />
                <TextComponent isError text={errors.name?.message ?? ''} />
              </>
            )}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            label="Apply"
            isDisable={!isValid}
            onPress={handleSubmit(handleApply)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {AuthScreen};
