import {AuthFormType} from './auth-form.type.ts';

export type AuthResponseType = {
  isSuccess: boolean;
  message: string;
  data: AuthFormType;
};
