import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
//Material UI Imports 
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    featureCard: {
      margin: '50px',
      maxWidth: '50%',
      height: "100%",
      //backgroundColor:'#486290',
      fontSize:'40px',
      fontFamily:'Expletus Sans',
    },
    featureSubtext: {
      padding: "0px",
      margin: '50px',
      maxWidth: '50%',
      height: "100%",
      //backgroundColor:'#486290',
      fontSize:'24px',
      fontFamily:'Metropolis',
    },
    keyFeatures: {
        fontFamily:'Expletus Sans',
        fontWeight:'Bold',
        fontSize:'48px'
    
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
    <Paper>
        <h1 className={classes.keyFeatures}>Key Features</h1>
      <Card varient="outlined" col-lg-6>
        <h1 className={classes.featureCard}>The future of medical examinations</h1>
        <div className={classes.featureSubtext}>
        <h2>Goodbye Analog, Hello Digital</h2>
        <p>Digibeat offers an innovative improvement to the traditional stethoscope exam.</p>
        <h2>Timeless Pratice, Fresh Approach</h2>
        <p>Eliminate inaccuracies in exams while simultaneously streamlining the process</p>
        <h2>Doctor Designed, Patient Approved</h2>
        <p>Made with a physician's workflow in mind, reliability and ease of use are heavily emphasized in it's construction.</p>
        </div>
      </Card>
        <section className='slider'>
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
        </section>
        </Paper>
    )
}

export default ImageSlider
