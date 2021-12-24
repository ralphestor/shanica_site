import { useState, useEffect } from 'react';
import Image from 'next/image'
import image from 'next/image';

export default function HomeImage() {

    return (
        <figure className='homeCardCont'>
            <div className='unset-img'>
            <Image
                src="/../public/shanHome.png"
                alt="Shanica Cabading"
                width={260}
                height={360}
                objectFit='cover'
                objectPosition='center'
                className='homeCardImage'
            />
            </div>
      </figure>
    )
}






