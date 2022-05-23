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
// const useStyles = makeStyles((theme) => ({
//   rightGrid: {
//     fontFamily: 'Metropolis',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     margin: 'auto',
//     paddingRight: '20px'
//   },

// }));

function Features() {
  // const classes = useStyles();
  return (
    <Paper>
      <Container className='feature-body' >
        <Grid fontSize='36px'>
          <br></br>
          <Card className='cardPositions'>
            <h2>Telemedical Ready</h2>
            <div className='media'>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={Telemedical}
              height='430'
              width='250'
            />
            </div>
            <div className='textBox'>
            <p>Optimize your remote patient care practices.
            </p>
            </div>
            </Card>
            <Card className='cardPositions'>
            <h2 className='AI'>AI-Driven Analysis</h2>
            <div className='media2'>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={AI}
              height='430'
              width='200'
            />
            </div>
            <div className='textBox'>
            <p>Realibly detect and analyze abnormalities before they become illness.</p>
            </div>
          </Card>

          <Card className='cardPositions'>
            <h2>High Fidelity Audio</h2>
            <div className='media'>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={Record}
              height='430'
              width='200'
            />
            </div>
            <div className='textBox'>
            <p className='record-text'>Hear each beat with crystal clear playback quality, adjustable volume control, and noise eliminating technology.</p>
            </div>
            </Card>
            <Card className='cardPositions'>
            <h2>On Demand Exams</h2>
            <div className='media2'>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={Demand}
              height='430'
              width='200'
            />
            </div>
            <div className='textBox'>
            <p>Take patient exams with ease anytime, anywhere.</p>
            </div>
          </Card>
          <br></br>
        </Grid>
      </Container>
    </Paper>
  );
}
export default Features;