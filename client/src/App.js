import { useEffect } from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Applicants from './components/applicants/Applicants';
import Form from './components/form/Form';
import Home from './components/home/Home';
import ApplicantDetails from './components/applicantDetails/ApplicantDetails';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getApplicants } from './actions/applicants';

function App() {
  const classes = useStyles();
  
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Applicants
          </Typography>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/applicants/:id" exact component={ApplicantDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
