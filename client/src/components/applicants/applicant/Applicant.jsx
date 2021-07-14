import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Button,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const Applicant = ({ applicant }) => {
  const history = useHistory();
  const classes = useStyles();
  const viewApplicantDetails = () =>
    history.push(`/applicants/${applicant._id}`);
  return (
    <Card className={classes.card}>
      <Avatar />
      <Typography className={classes.details} variant="h6">
        {applicant.name}
      </Typography>
      <Typography className={classes.details} variant="body2">
        {applicant.title}
      </Typography>
      <Button color="secondary" onClick={viewApplicantDetails}>
        View Details
      </Button>
    </Card>
  );
};

export default Applicant;
