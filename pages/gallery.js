import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Navbar from '../components/Navbar'
import ImageGallery from '../components/ImageGallery'

export default function Gallery() {
    return (
      <div className='galleryContainer'>
        <Head>
          <title>Gallery</title>
          <meta name="description" content="Hi! This is Shanica Cabading and welcome to my Gallery."/>
          <link rel="icon" href="/shanLogo.png" />
        </Head>
        <Navbar/>
        <section className='gallerySectionCont'>
            <label className='galleryTitle'>my gallery</label>
            <ImageGallery/>

        </section>
  
      </div>
    )
}