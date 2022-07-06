import React from 'react';
import './feature.css';


//Material UI Imports 
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@mui/material';
//import { borders } from '@mui/system';


//import images
import IMG from '../../assests/imgs/infoCard-04.svg';
import IMG2 from '../../assests/imgs/deviceInfo.svg';

//import { borderRadius, fontWeight } from '@material-ui/system';
const useStyles = makeStyles((theme) => ({
  keyFeatures: {
    fontFamily:'Source San Pro, sans-serif',
    fontWeight:'Bold',
    fontSize:'48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'underline',
    textDecorationColor: '#6a8aaf',
    marginBottom: '30px'

  }
}))


 

function Features() {
  const classes = useStyles();
  return (
    <Paper>
      <Container className='mainContainer'>
      <h1 className={classes.keyFeatures}>Key Features</h1>
        <Card className='cardPositions4' class='row'>
          <div className='media' class='col-lg-6'>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={IMG}
            />
          </div>
          <div class='col-lg-6'>
            <h1> Copy section</h1>
          </div>
          </Card>
          <br></br>
          <Card className='cardPositions4' class='row'>
          <div className='media2' class='col-lg-6 flex-row'>
            <h1> Copy section</h1>
          </div>
          <div className='media3' class='col-lg-6 flew-row'>
          <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={IMG2}
            />
          </div>
          </Card>
        <br></br>
        <br></br>
      </Container>
    </Paper>

  )
}

export default Features;