import Image from 'next/image';

function ImageGallery() {
    return ( 
        <div className='galleryFlexCont'>
            <div className='galleryImgCont'>
                <Image
                    src="/shan1.jpg"
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='galleryImg'
                />
            </div>
            <div className='galleryImgCont'>
                <Image
                    src="/shan2.jpg"
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='galleryImg'
                />
            </div>
            <div className='galleryImgCont'>
                <Image
                    src="/shan3.jpg"
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='galleryImg'
                />
            </div>
            <div className='galleryImgCont'>
                <Image
                    src="/shanHome.png"
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='galleryImg'
                />
            </div>
            <div className='galleryImgCont'>
                <Image
                    src="/shanHome2.jpg"
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='galleryImg'
                />
            </div>
            <div className='galleryImgCont'>
                <Image
                    src="/shanHome3.jpg"
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='galleryImg'
                />
            </div>
            <div className='galleryImgCont'>
                <Image
                    src="/shan4.jpg"
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='galleryImg'
                />
            </div>
            <div className='galleryImgCont'>
                <Image
                    src="/shan5.jpg"
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='galleryImg'
                />
            </div>
        </div>
     );
}

export default ImageGallery;