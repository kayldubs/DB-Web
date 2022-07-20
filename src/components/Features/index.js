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
import IMG2 from '../../assests/imgs/deviceInfo2.svg';

//import { borderRadius, fontWeight } from '@material-ui/system';
const useStyles = makeStyles((theme) => ({
  keyFeatures: {
    fontFamily:'Source San Pro, sans-serif',
    fontWeight:'Bold',
    color:'black',
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
          <div className='media2' class='col-lg-6 flex-row'>
          <h1 className='title'>Remote Patient Monitoring</h1>
            {/* <h2 className='subTitle'>Revolutionize your practice with the DB1 Digital stethoscope. DB1 fits advanced asculation technology in the palm of your hand using our 6 layer PCBA architecture.</h2> */}
            <p className='ptag'>• Connect to patients anywhere with Digibeat’s remote patient monitoring tools.</p>
            <p className='ptag'>• AI-guided exams and encrypted smart notifications enable physicians to stay informed about their patients' health and dynamically adjust care regimens based on data driven conclusions.</p>
            <p className='ptag'>• Intelligently highlight changes in medications and key biometrics to provide an overview of a patient’s disease progression.</p>
          </div>
          </Card>
          <br></br>
          <Card className='cardPositions4' class='row'>
          <div class='col-lg-6 copy'>
            <h1 className='title2'>Digital Stethoscope</h1>
            <h2 className='subTitle'>Revolutionize your practice with the DB1 Digital stethoscope. DB1 fits advanced asculation technology in the palm of your hand using our 6 layer PCBA architecture.</h2>
            <p className='ptag'>• Listen wirelessly with your preferred headphones or provided USB-C headphones.</p>
            <p className='ptag'>• Collect valuable patient biometric data in a method unattainable by traditional stethoscopes.</p>
            <p className='ptag'>• Evaluate patients more quickly than ever with a clinically improved exam workflow.</p>
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