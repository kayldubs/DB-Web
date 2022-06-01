import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
//Material UI Imports 

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';

//css import 
import './slider2.css'



const useStyles = makeStyles((theme) => ({
    featureCard: {
      fontSize:'40px', 
      fontFamily:'Expletus Sans',
      paddingTop: '50px',
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'underline',
        textDecorationColor: '#27AAE1',
        
    },
    featureSubtext: {
      paddingTop: "80px",
      margin: 'auto',
      maxWidth: '50%',
      height: "100%",
      textAlign: 'center',
      fontSize:'18px',
      fontFamily:'Metropolis',
    },
    keyFeatures: {
        fontFamily:'Expletus Sans',
        fontWeight:'Bold',
        fontSize:'48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'underline',
        textDecorationColor: '#486290',
        marginBottom: '30px'
    
      }
}))



const ImageSlider = ({ slides }) => {
    const classes = useStyles();
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
};

  const prevSlide = () => {
      setCurrent(current === 0 ? length -1 : current -1);
};

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
    <section className='row'>
        <h1 className={classes.keyFeatures}>Key Features</h1>
      <Card varient="outlined" className='col-lg-6 info-plane'>
        <h1 className={classes.featureCard}>The future of medical examinations</h1>
        <div className={classes.featureSubtext}>
        <h2>Goodbye Analog, Hello Digital</h2>
        <p>Digibeat offers an innovative improvements to the traditional stethoscope exam.</p>
        <h2>Timeless Pratice, Fresh Approach</h2>
        <p>Eliminate inaccuracies in exams while simultaneously streamlining the process</p>
        <h2>Doctor Designed, Patient Approved</h2>
        <p>Created with a physician’s workflow in mind, reliability and ease of use are at the forefront of this system.</p>
        </div>
      </Card>
      <br></br>
        <Card className='col-lg-6 slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt='device angles' className='image'/>
                        )}
                </div>
                )
            })}
        </Card>
        </section>
    )
}

export default ImageSlider
