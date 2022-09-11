import { useState } from 'react';
import { Form, Field, useFormik, FormikProvider } from 'formik';

import { FormInput } from '../../../components/FormInput';
import { Button } from '../../../components/Button';
import { useAuthenticationApi } from '../api/useAuthenticationApi';
import { HomePageFormSchema } from '../../../utils/homePageValidationSchema';

import styles from './Authentication.module.css';

export const Authentication = () => {
  const [userInfo, setUserInfo] = useState(null);

  useAuthenticationApi({ params: userInfo, enabled: !!userInfo });

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: HomePageFormSchema,
    onSubmit: (values, { resetForm }) => {
      // setUserInfo(values);
      console.log('values :>> ', values);
      resetForm();
      setUserInfo(null);
    },
  });

  return (
    <div className={styles.wrapper}>
      <h2>Authentication</h2>
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
            Authentication
          </Button>
        </Form>
      </FormikProvider>
    </div>
  );
};
