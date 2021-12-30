import Head from 'next/head'
import Navbar from '../components/Navbar'
import YoutubeVids from '../components/YoutubeVids'

export default function Vlogs() {
    return (
      <div className='vlogsContainer'>
        <Head>
          <title>Vlogs</title>
          <meta name="description" content="Hi! This is Shanica Cabading and welcome to my Vlogs Page."/>
          <link rel="icon" href="/shanLogo.png" />
        </Head>
        <Navbar/>
        <YoutubeVids/>
  
      </div>
    )
}