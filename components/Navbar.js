import Link from 'next/link'
import { Icon } from '@iconify/react'
import BurgerMenu from './BurgerMenu'

export default function Navbar() {
    return (
      <nav className='mainNav'>
        <div className='mobileNav'>
          <BurgerMenu/>
        </div>
        <div className='navTitleCont'>
            <Link href="/" passHref>
              <a className='navTitle'>SHANICA</a>
            </Link>
        </div>
        <div className='mainNavListCont'>
            <ul className='mainNavList elegant-hover-main'>
              <li>
                  <Link href="/" passHref>
                    <a className='mainNavLinks'>HOME</a>
                  </Link>
              </li>
              <li>
                  <Link href="/about" passHref>
                    <a className='mainNavLinks'>ABOUT</a>
                  </Link>
              </li>
              <li>
                  <Link href="/gallery" passHref>
                    <a className='mainNavLinks'>GALLERY</a>
                  </Link>
              </li>
              <li>
                  <Link href="/vlogs" passHref>
                    <a className='mainNavLinks'>VLOGS</a>
                  </Link>
              </li>
              <li>
                  <Link href="/contacts" passHref>
                    <a className='mainNavLinks'>CONTACTS</a>
                  </Link>
              </li>
            </ul>
        </div>
      </nav>
    )
}