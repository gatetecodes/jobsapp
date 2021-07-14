import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createApplicant } from '../../actions/applicants';

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [applicantData, setApplicantData] = useState({
    name: '',
    title: '',
    resume: '',
    description: '',
    status: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createApplicant(applicantData));
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Submit Profile</Typography>
        <TextField
          name="name"
          variant="outlined"
          label="name"
          fullWidth
          value={applicantData.name}
          onChange={(e) =>
            setApplicantData({ ...applicantData, name: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={applicantData.title}
          onChange={(e) =>
            setApplicantData({ ...applicantData, title: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={applicantData.description}
          onChange={(e) =>
            setApplicantData({ ...applicantData, description: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setApplicantData({ ...applicantData, resume: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
