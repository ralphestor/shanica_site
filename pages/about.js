import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Navbar from '../components/Navbar'
import AboutArticles from '../components/AboutArticles'

export default function About() {
    return (
      <div className='aboutContainer'>
        <Head>
          <title>About</title>
          <meta name="description" content="Hi! This is Shanica Cabading and welcome to my About Me Page."/>
          <link rel="icon" href="/shanLogo.png" />
        </Head>
        <Navbar/>
        <AboutArticles/>
      </div>
    )
}
  