import React, { useState } from 'react';
import { SliderData } from '../Slider-2/SliderData';
import { HeroData } from './HeroData'; 
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { TextData } from './TextData';
import './slider.css';

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
        <section>
            <div className='text-hero'>
                <h1>The World's Most</h1>
                {/* {TextData.map((text, index) => {
                    return (
                        <div className={index === current ? 'text active' : 'text'} key={index}>
                        {index === current && (<p text={text.url} className='inside-text'/>)}
                    </div>
                )},
                )
                    }) */}
                <h1>Electronic Stethoscope</h1>
                
            </div>
        <div className='hero-icons'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {HeroData.map((pictures, index) => {
                return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                <div>
                <img src={pictures.image} alt="Hero IMG" className='hero-image' />
                <div className='content'>
                    <h2>{pictures.heading}</h2>
                    <p>{pictures.desc}</p>
                </div>
                </div>
                )}
                </div>        
                )
            })}
        </div>
        </section>
    )
};

export default ImageHero;