import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {useAppSelector} from '../hooks/hooks.ts';

export type IAuthState = {
  isAuthenticated: boolean;
};

const initialState: IAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setIsAuthenticated: (
      state: IAuthState,
      {payload}: PayloadAction<boolean>,
    ) => {
      state.isAuthenticated = payload;
    },
  },
});

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const useIsAuthenticated = () => useAppSelector(selectIsAuthenticated);

export const {
  reducer: authReducer,
  actions: {setIsAuthenticated},
} = authSlice;
