import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <div className='homeContainer'>
      <Head>
        <title>Shanica Cabading</title>
        <meta name="description" content="Hi! This is Shanica Cabading and welcome to my website." />
        <link rel="icon" href="/shanLogo.png" />
      </Head>
      <main>
        <label className='homeTitle'>SHANICA</label>
        <div className='flexContainer'>
          <div className='homeImg'>
            <Image
              src="/../public/shanHome.png"
              alt="Shanica Cabading"
              width={530.4}
              height={631}
            />
          </div>

          <nav className='homeNav'>
            <ul className='navList elegant-hover'>
              <li>
                  <Link href="/about">
                    <a className='homeNavLinks'>ABOUT</a>
                  </Link>
              </li>
              <li>
                  <Link href="/gallery">
                    <a className='homeNavLinks'>GALLERY</a>
                  </Link>
              </li>
              <li>
                  <Link href="/vlogs">
                    <a className='homeNavLinks'>VLOGS</a>
                  </Link>
              </li>
              <li>
                  <Link href="/contacts">
                    <a className='homeNavLinks'>CONTACTS</a>
                  </Link>
              </li>
            </ul>
            <div className='homeSocialIcons'>
              <a href='https://www.youtube.com/user/shanica1' target="_blank">
                <Icon className="socialIcons" icon="akar-icons:youtube-fill" color="rgba(0, 0, 0, 0.3)" height="50" />
              </a>
              <a href='https://www.instagram.com/its.shanica/' target="_blank">
                <Icon className="socialIcons" icon="akar-icons:instagram-fill" color="rgba(0, 0, 0, 0.3)" height="40" />
              </a>
              <a href='https://www.facebook.com/acinahs99' target="_blank">
                <Icon className="socialIcons" icon="akar-icons:facebook-fill" color="rgba(0, 0, 0, 0.3)" width="38" />
              </a>
            </div>
          </nav>
        </div>
      </main>

    </div>
  )
}
