import React from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Animatedletter from './Animatedletter'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 15%;
    opacity: 0;
    z-index: 1;
    transform-style: preserve-3d;
    animation: fadeIn 1s forwards;
    animation-delay: 1s;
`

export const Textarea = styled.div`
    position: absolute;
    font-family: 'Lexend', sans-serif;
    color: #fff;

    &>h1 {
        font-size: 48px;
        font-weight: 400;
        letter-spacing: -2px;
    }

    &>h1::before {
        content: '<h1>';
        font-family: 'La Belle Aurore', sans-serif;
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 1px;
        color: #BAFF39;
        opacity: 0.6;
        margin-right: 8px;
    }

    &>h1::after {
        content: '</h1>';
        font-family: 'La Belle Aurore', sans-serif;
        font-weight: 400;
        font-size: 34px;
        letter-spacing: 1px;
        color: #BAFF39;
        opacity: 0.6;
        margin-left: 8px;
        animation: fadeIn 1s 1.7s backwards;
    }

    .focus {
        color: #BAFF39;
        margin-left: 8px;
        font-size: 80px;
        text-shadow: 0 8px 0px #000;
        opacity: 0;
        animation: rotateIn 1s linear both;
        animation-delay: 1.4s;
    }

    &>h2 {
        margin: 16px 0 34px 0;
        font-family: sans-serif;
        font-size: 16px;
        letter-spacing: 3px;
        color: #8d8d8d;
        animation: fadeIn 1s 1.8s backwards;
    }

    .flat-button {
        color: #BAFF39;
        font-family: sans-serif;
        font-size: 18px;
        text-decoration: none;
        letter-spacing: 4px;
        padding: 8px 16px;
        border: 1px solid #BAFF39;
        animation: fadeIn 1s 1.8s backwards;
    }

    .flat-button:hover {
        background-color: #BAFF39;
        color: #000;
    }

    p {
        margin-top: 16px;
        font-size: 12px;
        width: 40%;
        line-height: 1.5;
        letter-spacing: 1px;
        color: lightgray;
        animation: pulse 1s;
    }

    p:nth-of-type(1) {
        animation-delay: 1.5s;
    }
`

const Home = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate')
    const nameArray = ['u', 'd', 'e', 'e', 'p']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

  return (
    <>
        <Container>
            <Textarea>
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className="focus">S</span>
                    <Animatedletter letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <Animatedletter letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Fullstack Developer / Javascript / React</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </Textarea>
        </Container>
        <Loader type="pacman" />
    </>
  )
}

export default Home