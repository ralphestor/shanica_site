import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Navbar from '../components/Navbar'

export default function About() {
    return (
      <div className='aboutContainer'>
        <Head>
          <title>About</title>
          <meta name="description" content="Hi! This is Shanica Cabading and welcome to my website."/>
          <link rel="icon" href="/shanLogo.png" />
        </Head>
        <Navbar/>
  
      </div>
    )
}
  