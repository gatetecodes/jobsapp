import React, { useEffect } from 'react';
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Card,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import useStyles from './styles';
import { getApplicant } from '../../actions/applicants';

const ApplicantDetails = () => {
  const classes = useStyles();
  const applicant = useSelector((state) => state.applicants);
  console.log(applicant);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    dispatch(getApplicant(id));
  }, [id]);

  return !applicant ? (
    <CircularProgress />
  ) : (
    <Card elevation={3}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {applicant.name}
          </Typography>

          <Typography variant="h6">{applicant.title}</Typography>
          <Typography variant="body2">{applicant.description}</Typography>
          <Button color="primary" onClick={() => history.push('/')}>
            Back to All Applicants
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ApplicantDetails;
