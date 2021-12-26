import { useState, useEffect } from 'react';
import Image from 'next/image'
import image from 'next/image';
import { Fade } from 'react-slideshow-image';

export default function HomeImage() {
    const fadeImages = [
        "/shanHome.png",
        "/shanHome2.jpg",
        "/shanHome3.jpg"
      ];
    

    return (
        <figure className='homeCardCont'>
            <div className='unset-img'>
                <div className="slide-container">
                    <Fade duration={3000} transitionDuration={500}>
                    <div className="each-fade">
                        <div>
                        <Image
                            src={fadeImages[0]}
                            alt="Shanica Cabading"
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            className='homeCardImage'
                        />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <Image
                                src={fadeImages[1]}
                                alt="Shanica Cabading"
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                className='homeCardImage'
                            />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <Image
                                src={fadeImages[2]}
                                alt="Shanica Cabading"
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                className='homeCardImage'
                            />
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
      </figure>
    )
}






