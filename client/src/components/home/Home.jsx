import React, { useEffect } from 'react';
import { Grow, Container, Grid } from '@material-ui/core';
import Applicants from '../applicants/Applicants';
import { useDispatch } from 'react-redux';
import { getApplicants } from '../../actions/applicants';
import Form from '../form/Form';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApplicants());
  }, [dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Applicants />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
