import { useState } from 'react';
import { Form, Field, useFormik, FormikProvider } from 'formik';
import { useQueryClient } from 'react-query';

import { FormInput } from '../../../components/FormInput';
import { Button } from '../../../components/Button';
import { useRegistrationApi } from '../api/registrationApi';
import { HomePageFormSchema } from '../../../utils/homePageValidationSchema';

import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useAuth } from '../../../hooks/useAuth';
import { BACKEND_TOKEN } from '../../../constants/localStorage';

import styles from './Registration.module.css';

export const Registration = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { setAuthStatus, setCurrentToken } = useAuth();
  const { setValue: setLocalStorage } = useLocalStorage(BACKEND_TOKEN);

  useRegistrationApi({
    params: userInfo,
    enabled: !!userInfo,
    onSuccess: async response => {
      const {
        data: { token, refreshToken },
      } = response;
      await setLocalStorage({ token, refreshToken });
      setAuthStatus(true);
      setCurrentToken(response.data.token);
    },
  });

  const queryClient = useQueryClient();

  console.log('queryClient :>> ', queryClient);

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: HomePageFormSchema,
    onSubmit: (values, { resetForm }) => {
      setUserInfo(values);
      resetForm();
      setUserInfo(null);
    },
  });

  return (
    <div className={styles.wrapper}>
      <h2>Registration</h2>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <Field
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            component={FormInput}
            label="Your name"
          />
          <Field
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            component={FormInput}
            type="password"
            label="Your password"
          />
          <Button type="submit" className={styles.button}>
            Registration
          </Button>
        </Form>
      </FormikProvider>
    </div>
  );
};
