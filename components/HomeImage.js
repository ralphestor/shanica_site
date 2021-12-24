import { useState, useEffect } from 'react';
import Image from 'next/image'
import image from 'next/image';

export default function HomeImage() {

    const images = [
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/10502143/pexels-photo-10502143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/10436443/pexels-photo-10436443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/8431379/pexels-photo-8431379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/9518954/pexels-photo-9518954.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/9879553/pexels-photo-9879553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ];

    const [imgNum, setImgNum] = useState(0);
    const image = images[imgNum];
    let last = images.length - 1;

    


    return (
        <figure className='homeCardCont'>
            <div className='unset-img'>
            <Image
                src={image}
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






