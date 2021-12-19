import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Navbar() {
    return (
      <nav className='mainNav'>
        <div className='navTitleCont'>
            <a href="/" className='navTitle'>SHANICA</a>
        </div>
        <div>
        <ul className='mainNavList elegant-hover-main'>
              <li>
                  <Link href="/">
                    <a className='mainNavLinks'>HOME</a>
                  </Link>
              </li>
              <li>
                  <Link href="/about">
                    <a className='mainNavLinks'>ABOUT</a>
                  </Link>
              </li>
              <li>
                  <Link href="/about">
                    <a className='mainNavLinks'>GALLERY</a>
                  </Link>
              </li>
              <li>
                  <Link href="/vlogs">
                    <a className='mainNavLinks'>VLOGS</a>
                  </Link>
              </li>
              <li>
                  <Link href="/contacts">
                    <a className='mainNavLinks'>CONTACTS</a>
                  </Link>
              </li>
            </ul>
        </div>   
      </nav>
    )
}