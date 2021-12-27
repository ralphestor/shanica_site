import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import Link from 'next/link'

class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <div id="outer-container">
            <Menu right>
                <div className="mobileLinkCont">
                    <Link href="/" passHref>
                    <a className='mobileNavLinks'>HOME</a>
                    </Link>
                </div>
                
                <div className="mobileLinkCont">
                    <Link href="/about" passHref>
                    <a className='mobileNavLinks'>ABOUT</a>
                    </Link>
                </div>

                <div className="mobileLinkCont">
                    <Link href="/gallery" passHref>
                    <a className='mobileNavLinks'>GALLERY</a>
                    </Link>
                </div>

                <div className="mobileLinkCont">
                    <Link href="/vlogs" passHref>
                    <a className='mobileNavLinks'>VLOGS</a>
                    </Link>
                </div>

                <div className="mobileLinkCont">
                    <Link href="/contacts" passHref>
                    <a className='mobileNavLinks'>CONTACTS</a>
                    </Link>
                </div>
            </Menu>
        </div>
    );
  }
}

export default BurgerMenu;