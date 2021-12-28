import Head from 'next/head'
import Link from 'next/link'
import HomeImage from '../components/HomeImage'
import { Icon } from '@iconify/react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='homeContainer'>
      <div className="homeNavbar">
        <Navbar/>
      </div>

      <Head>
        <title>Shanica Cabading</title>
        <meta name="description" content="Hi! This is Shanica Cabading and welcome to my website." />
        <link rel="icon" href="/shanLogo.png" />
      </Head>
      <main>
        <label className='homeTitle'>SHANICA</label>
        <label className='nameBesideCard'>SHANICA</label>
        <div className='homeSocialIcons'>

                <a className='socialIconsCont' href='https://www.youtube.com/user/shanica1' target="_blank" rel="noreferrer">
                  <Icon  className="socialIcons" icon="akar-icons:youtube-fill" color="rgba(0, 0, 0, 0.2)" height="30" />
                </a>

                <a className='socialIconsCont' href='https://www.instagram.com/its.shanica/' target="_blank" rel="noreferrer" >
                  <Icon className="socialIcons" icon="akar-icons:instagram-fill" color="rgba(0, 0, 0, 0.2)" height="25" />
                </a>

                <a className='socialIconsCont' href='https://www.facebook.com/acinahs99' target="_blank" rel="noreferrer">
                  <Icon  className="socialIcons" icon="akar-icons:facebook-fill" color="rgba(0, 0, 0, 0.2)" width="25" />
                </a>
          </div>
        <div className='flexContainer'>
          <HomeImage/>
          <nav className='homeNav'>
            <ul className='navList elegant-hover'>
              <li>
                  <Link href="/about" passHref>
                    <a className='homeNavLinks'>ABOUT</a>
                  </Link>
              </li>
              <li>
                  <Link href="/gallery" passHref>
                    <a className='homeNavLinks'>GALLERY</a>
                  </Link>
              </li>
              <li>
                  <Link href="/vlogs" passHref>
                    <a className='homeNavLinks'>VLOGS</a>
                  </Link>
              </li>
              <li>
                  <Link href="/contacts" passHref>
                    <a className='homeNavLinks'>CONTACTS</a>
                  </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>

    </div>
  )
}
