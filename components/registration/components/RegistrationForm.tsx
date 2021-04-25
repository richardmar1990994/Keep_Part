import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { Form } from '../../core';
import { getUserError } from '../../core/redux/user.duck';
import useRegistrationForm from '../hooks/useRegistrationForm';

const RegistrationForm: FC = () => {
  const error = useSelector(getUserError);
  const formik = useRegistrationForm();

  return (
    <Form
      icon={<PersonAddIcon />}
      title="Registration"
      buttonLabel="Register"
      formik={formik}
      error={error}
    />
  );
};

export default RegistrationForm;
