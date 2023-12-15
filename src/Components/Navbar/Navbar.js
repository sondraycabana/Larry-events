 import React,{useState,useEffect} from 'react'
 import {Nav, 
    NavbarContainer,
     NavLogo, 
  
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks, 
     NavItemBtn, 
     NavBtnLink,
     } from './Navbar.element'
 import { Button} from '../../globalStyles'
 import {FaBars, FaTimes} from 'react-icons/fa';
 import { IconContext} from 'react-icons/lib'

 import FirstImg from '../../../src/images/larrykaylogo.jpg'

// import {Button } from '../../globalStyles';
 //the ../../ means (outside Navbar and outside Component then Globalstyles)
  const Navbar = (props) => {
      const[click, setClick] = useState(false)
      const[button, setButton] = useState(true)

      const handleClick = () => setClick(!click);
      const closeMobileMenu = () => setClick(false)

      const showButton = () => {
          if(window.innerwidth <= 960){
              setButton(false)
          }else{
              setButton(true)
          }
      }
      useEffect(()=> {
          showButton()
      }, [])

      window.addEventListener('resize', showButton);
     return (
          <>
          <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
       
            <NavbarContainer>
           
           
            <NavLogo to="/" onClick={closeMobileMenu}>
            
            <img src={FirstImg} height={45} />
          
        
            </NavLogo>
           
            <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
            <NavLinks to='/'>Home</NavLinks>
            </NavItem>
           
            <NavItem>
            <NavLinks to='services'>Service</NavLinks>
            </NavItem>
          
            <NavItem>
            <NavLinks to='events'>Events</NavLinks>
            </NavItem>

            <NavItem>
            <NavLinks to='About'>About</NavLinks>
            </NavItem>

            <NavItem>
            <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
            {/*
         <NavItemBtn>
            {button ? (
                <NavBtnLink to="/">
                <Button primary>SIGN UP</Button>
                </NavBtnLink>
            ):(
                <NavBtnLink to="/contact">
                <Button onClick={closeMobileMenu} fontBig primary>
                SIGN UP
                </Button>
                </NavBtnLink>
            )}
            </NavItemBtn>
        */}

           


            </NavMenu>
            
            </NavbarContainer>
           
        </Nav>
        </IconContext.Provider>
        </>
     );
 };
 export default Navbar