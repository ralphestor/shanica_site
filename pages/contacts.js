import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Navbar from '../components/Navbar'

export default function Contacts() {
    return (
      <div className='contactsContainer'>
        <Head>
          <title>Contacts</title>
          <meta name="description" content="Hi! This is Shanica Cabading and welcome to my Contacts Page."/>
          <link rel="icon" href="/shanLogo.png" />
        </Head>
        <Navbar/>
        <main className='contactCont'>
          <label className='contactLbl'>Reach me through Gmail, Facebook, or Instagram</label>
          <div className='allContactIcons'>    
                <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=shanicacabading@gmail.com&su=Your+Subject+here&body=Your+Message+here&ui=2' target="_blank" rel="noreferrer" passHref>
                  <button className='contactIconsCont'> 
                  <Icon icon="simple-icons:gmail" color="rgba(0, 0, 0, 0.2)" width="100" />
                  </button>
                </a>

                <a href='https://www.instagram.com/its.shanica/' target="_blank" rel="noreferrer" passHref>
                  <button className='contactIconsCont'> 
                    <Icon icon="akar-icons:instagram-fill" color="rgba(0, 0, 0, 0.2)" height="100" />
                  </button>
                </a>
              
                <a href='https://www.facebook.com/acinahs99' target="_blank" rel="noreferrer" passHref>
                  <button className='contactIconsCont'> 
                      <Icon icon="akar-icons:facebook-fill" color="rgba(0, 0, 0, 0.2)" height="100" />
                  </button>
                </a>
          </div>
        </main>
      </div>
    )
}