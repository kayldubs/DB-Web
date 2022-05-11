import React from 'react';

//Material UI Imports 
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@mui/material';

//import images
import AI from '../../assests/imgs/aiVactor.svg';
import Telemedical from '../../assests/imgs/teleVector.svg';
import Record from '../../assests/imgs/recordVector.svg';
import Demand from '../../assests/imgs/demandVector.svg';

//custom classes for styling
const useStyles = makeStyles((theme) => ({
  featureCard: {
    padding: "0px",
    marginTop: '0px',
    maxWidth: '100%',
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
  },
  rightGrid:{
    padding: "30px",
  }
}));

function Features() {
  const classes = useStyles();
  return (
    <Paper>
      <h1>Key Features</h1>
      <Card className={classes.featureCard}>
        <h1>The future of medical examinations</h1>
        <h2>Goodbye Analog, Hello Digital</h2>
        <p>Digibeat offers an innovative improvement to the traditional stethoscope exam.</p>
        <h2>Timeless Pratice, Fresh Approach</h2>
        <p>Eliminate inaccuracies in exams while simultaneously streamlining the process</p>
        <h2>Doctor Designed, Patient Approved</h2>
        <p>Made with a physician's workflow in mind, reliability and ease of use are heavily emphasized in it's construction.</p>
      </Card>
      <Container>
      <Grid className={classes.rightGrid}>
        <Card>
        <h2>Telemedical Ready</h2>
        <CardMedia
            component="img" 
            alt="heart with connections to DigiBeat Logo" 
            image={Telemedical}
          />
        <p>Optimize your remote patient care practices.</p>
        </Card>
        <Card>
        <h2>AI-Driven Analysis</h2>
          <CardMedia
            component="img" 
            alt="heart with connections to DigiBeat Logo" 
            image={AI}
            width='100%'
          />
        <p>Realibly detect and analyze abnormalities before they become illness.</p>
        </Card>
        <Card>
        <h2>High Fidelity Audio</h2>
        <CardMedia
            component="img" 
            alt="heart with connections to DigiBeat Logo" 
            image={Record}
            width='100%'
          />
        <p>Hear each beat with crystal clear playback quality, adjustable volume control, and noise eliminating technology.</p>
        </Card>
        <Card>
        <h2>On Demand Exams</h2>
        <CardMedia
            component="img" 
            alt="heart with connections to DigiBeat Logo" 
            image={Demand}
            width='100%'
          />
        <p>Take patient exams with ease anytime, anywhere.</p>
        </Card>
        </Grid>
        </Container>
    </Paper>
  );
}
export default Features;