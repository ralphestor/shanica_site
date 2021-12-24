import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import YouTube from 'react-youtube'
import Navbar from '../components/Navbar'

export default function Vlogs() {
    return (
      <div className='vlogsContainer'>
        <Head>
          <title>Vlogs</title>
          <meta name="description" content="Hi! This is Shanica Cabading and welcome to my Vlogs Page."/>
          <link rel="icon" href="/shanLogo.png" />
        </Head>
        <Navbar/>
  
      </div>
    )
}