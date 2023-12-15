import styled from 'styled-components'
import { Container} from '../../globalStyles'
import FirstImg from '../../../src/images/svg2.svg'


import {Link} from 'react-router-dom';


export const Nav = styled.nav`
background:white;
/* background:#B026FF; */
height: 60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0px;
z-index:999;

`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`
export const NavLogo = styled(Link)`

/* color: #fff; */
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;

`

export const NavIcon = styled(FirstImg)`

margin-right: 0.5rem;
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width:960px){
    display:block;
    position: absolute;
    background-color: grey;
    top: 15px;
    right: 10px;
    transform: tanslate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
export const  NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 90vh;
    position: absolute;
    top: 60px;
    
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity:1;
    transition: all 0.5s ease;
    background: #F5F5F5;
}
`
export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover{
    border-bottom: 2px solid #4b59f7;
}
@media screen and (max-width:960px){
    width: 100%;
    
    &:hover{
        border:none;
    }

}
`

export const NavLinks = styled(Link)`
/* color: #fff; */
color:black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
        color: orange;
        transition: all 0.3s ease;
    }
}
`;
export const NavItemBtn = styled.li`
@media screen and (max-width: 960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
}
`
export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 60%;
width: 80%;
border: none;
outline: none; 
margin-top: 20px;


@media screen and(max-width:960px){
   
  }
`
export const closeMobileMenu = styled.div`

`