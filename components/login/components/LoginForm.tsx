import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Form } from '../../core';
import { getAuthError } from '../../core/redux/auth.duck';
import useLoginForm from '../hooks/useLoginForm';

const LoginForm: FC = () => {
  const authError = useSelector(getAuthError);
  const formik = useLoginForm();

  return <Form title="Sign In" buttonLabel="Login" formik={formik} error={authError} />;
};

export default LoginForm;
