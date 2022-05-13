import React from 'react';


//Material UI Imports 
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@mui/material';
//import { borders } from '@mui/system';


//import images
import AI from '../../assests/imgs/aiVactor.svg';
import Telemedical from '../../assests/imgs/teleVector.svg';
import Record from '../../assests/imgs/recordVector.svg';
import Demand from '../../assests/imgs/demandVector.svg';
//import { borderRadius, fontWeight } from '@material-ui/system';


//custom classes for styling
const useStyles = makeStyles((theme) => ({
  rightGrid: {
    fontFamily: 'Metropolis',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingRight: '70px',
    marginRight: '40px',
    marginTop: '40px',
  },

}));

function Features() {
  const classes = useStyles();
  return (
    <Paper>
      <Container >
        <Grid className={classes.rightGrid} fontSize='36px'>
          <Card>
            <h2>Telemedical Ready</h2>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={Telemedical}
              height='400'
            />
            <p>Optimize your remote patient care practices.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <h2>AI-Driven Analysis</h2>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={AI}
              height='400'
            />
            <p>Realibly detect and analyze abnormalities before they become illness.</p>
          </Card>

          <Card class="col-lg-6">
            <h2>High Fidelity Audio</h2>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={Record}
              height='400'
            />
            <p>Hear each beat with crystal clear playback quality, adjustable volume control, and noise eliminating technology.</p>
            <br></br>
            <h2>On Demand Exams</h2>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={Demand}
              height='450'
            />
            <p>Take patient exams with ease anytime, anywhere.</p>
          </Card>
        </Grid>
      </Container>
    </Paper>
  );
}
export default Features;