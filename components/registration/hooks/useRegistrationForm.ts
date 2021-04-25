import { useCallback } from 'react';
import { useFormik, FormikProps } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { User } from '../../core/interfaces';
import { addUser } from '../../core/redux/user.duck';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/\S/, 'Password can only contain non whitespace character.'),
});

export default function useProfileForm() {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    user => {
      dispatch(addUser.request(user));
    },
    [dispatch]
  );
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit,
    validationSchema,
  }) as FormikProps<User>;

  return formik;
}
