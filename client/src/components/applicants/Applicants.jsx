import React from 'react';
import Applicant from './applicant/Applicant';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import { useSelector } from 'react-redux';
const Applicants = () => {
  const classes = useStyles();
  const applicants = useSelector((state) => state.applicants);
  console.log(applicants);
  return !applicants.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {applicants.map((applicant) => (
        <Grid item key={applicant._id} xs={12} sm={6}>
          <Applicant applicant={applicant} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Applicants;
