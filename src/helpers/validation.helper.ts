import * as yup from 'yup';

export const validation = {
  confirmForm: yup
    .object({
      name: yup.string().required('field is required'),
      email: yup
        .string()
        .email('field must be email')
        .required('field is required'),
    })
    .required(),
};
