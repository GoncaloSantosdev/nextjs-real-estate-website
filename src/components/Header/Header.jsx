import { useState } from 'react';
import Link from 'next/link';
// Styles
import { StyledHeader, StyledNav } from './styles';
// React Icons
import { BsHouseDoor } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

const menuData = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: '/'
  },
  {
    title: 'Property',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/'
  },
  {
    title: 'Contact Us',
    path: '/'
  },
]

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <StyledHeader>
      <div className="container">
        <StyledNav>
          <div className='header__logo'>
              <BsHouseDoor size={24}/>
              <Link href='/'>
                <h3><span style={{ color: 'var(--orange)'}}>Easy</span> Housing</h3>
              </Link>
          </div>

          <div className='header__icons' onClick={handleMenu}>
            {menu ? <IoCloseOutline size={18}/> : <HiMenu size={18}/>}
          </div>

          <div className={menu ? 'header__menu-mobile scale-up-center' : 'header__menu'}>
            {menuData.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </div>
        </StyledNav>
      </div>
    </StyledHeader>
  )
}

export default Header