import { useCallback } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { updateUser } from '../../core/redux/user.duck';

export default function useProfileForm<T>({ initialValues }: { initialValues: T }) {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    values => {
      dispatch(updateUser.request(values));
    },
    [dispatch]
  );

  const formik = useFormik({
    initialValues,
    onSubmit,
    enableReinitialize: true,
  });

  return formik;
}
