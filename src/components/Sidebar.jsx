import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styledComponents from 'styled-components'

import Logo from '../assets/logo.svg'
import { AiFillHome } from 'react-icons/ai'
import { HiUser } from 'react-icons/hi'
import { HiMailOpen } from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'

const NavbarContainer = styledComponents.div`
    background: #272626;
    width: 150px;
    height: 100%;
    padding: 20px;
    position: absolute;
    top: 0;
    z-index: 3;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        text-decoration: none;
    }

    a>img {
        width: 74px;
    }

    a>span {
        color: #fff;
    }
`

const Nav = styledComponents.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;

    &>a>svg {
        transition: all 0.3s ease-out;
    }

    &>a.active>svg>path {
        color: #BAFF39;
    }

    &>a {
        position: relative;
    }

    &>a:hover>svg {
        color: #BAFF39;
        opacity: 0;
    }

    &>a:hover::before {
        font-family: 'Poppins', sans-serif;
        font-weight: normal;
        letter-spacing: 2px;
        position: absolute;
        top: 15px;
        text-align: center;
        color: #BAFF39;
        opacity: 0;
        transition: all 0.3s ease-out;
    }

    &>a:first-child:hover::before {
        content: 'HOME';
        opacity: 1;
    }

    &>a:nth-child(2):hover::before {
        content: 'ABOUT';
        opacity: 1;
    }

    &>a:nth-child(3):hover::before {
        content: 'CONTACT';
        opacity: 1;
    }
`

const List = styledComponents.ul`
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 12px;

    & a {
        font-size: 20px;
        color: #4d4d4e;
    }

    &>li:hover>a>svg {
        transition: all 0.3s ease-out;
        color: #BAFF39;
    }
`

const Sidebar = () => {
  return (
    <NavbarContainer>
        <Link to="/">
            <img src={Logo} alt='logo' />
            <span>Sudeep</span>
        </Link>
        
        <Nav>
            <NavLink to="/" activeClassName="active">
                <AiFillHome color="#4d4d4e" size={40}/>
            </NavLink>
            <NavLink to="/about" activeClassName="active">
                <HiUser color="#4d4d4e" size={40}/>
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
                <HiMailOpen color="#4d4d4e" size={40}/>
            </NavLink>            
        </Nav>

        <List>
            <li>
                <a href="https://github.com/Sudeep-K" target="_blank" rel="noreferrer">
                    <AiFillGithub />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/sudeep-kaucha-9a58951a4/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/sudip.kaucha/" target="_blank" rel="noreferrer">
                    <AiFillFacebook />
                </a>
            </li>
        </List>
    </NavbarContainer>
  )
}

export default Sidebar