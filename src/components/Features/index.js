import React from 'react';
import './feature.css';


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
import IMG from '../../assests/imgs/infoCard-03.svg';

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
            <Container>
              <br></br>
          <Card className='cardPositions4' class='row'>
            <div className='media' class='col-lg-6'>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={IMG}
            />
            </div>
            <div className='media2' class='col-lg-6'>
              <h1>Test Header</h1>
              <p>text content</p>
            </div>
        </Card>
        <br></br>
        </Container>
    </Paper> 
    
  )
}

export default Features;