import React, { useState } from 'react';
import { SliderData } from '../Slider-2/SliderData';
import { HeroData } from './HeroData'; 
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageHero = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    };
    
      const prevSlide = () => {
          setCurrent(current === 0 ? length -1 : current -1);
    };
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='hero-icons'>
            <FaArrowAltCircleLeft className='hero-icon' onClick={prevSlide} />
            <FaArrowAltCircleRight className='hero-icon2' onClick={nextSlide} />
            {HeroData.map((pictures, index) => {
                return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={pictures.image} alt="Hero IMG" className='hero-image' />
                )}
                
                </div>        
                )
            })}
        </section>
    )
};

export default ImageHero;