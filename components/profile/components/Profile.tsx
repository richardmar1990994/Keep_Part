import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { User } from '../../core/interfaces';
import { getUser, deleteUser } from '../../core/redux/user.duck';
import useProfileForm from '../hooks/useProfileForm';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      marginTop: theme.spacing(8),
    },
    field: {
      marginTop: theme.spacing(2),
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: theme.spacing(2),
    },
  })
);

const Profile: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const formik = useProfileForm<User>({
    initialValues: user,
  });

  const handleDelete = useCallback(() => {
    dispatch(deleteUser.request(user.username));
  }, [user, dispatch]);

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Typography variant="h4">"{user.username}" Profile Page</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              error={!!formik.errors.firstName}
              helperText={formik.errors.firstName}
              autoComplete="username"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              error={!!formik.errors.lastName}
              helperText={formik.errors.lastName}
              autoComplete="username"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </Grid>
        </Grid>
        <TextField
          className={classes.field}
          label="Description"
          id="description"
          fullWidth
          multiline
          rows={5}
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <div className={classes.buttonContainer}>
          <Button type="button" variant="contained" color="secondary" onClick={handleDelete}>
            Delete Profile
          </Button>
          <Button type="submit" variant="contained" color="primary" disabled={!formik.dirty}>
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
