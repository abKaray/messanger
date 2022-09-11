import * as Yup from 'yup';

export const HomePageFormSchema = Yup.object({
  name: Yup.string().required('User name is required'),
  password: Yup.string().required('Password is required'),
});
