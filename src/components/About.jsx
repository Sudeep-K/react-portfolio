import React from 'react'
import { useEffect } from 'react'

import '../index.scss'
import { Container } from './Home'
import { Textarea } from './Home'

import { FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillHtml5 } from 'react-icons/ai'
import Animatedletter from './Animatedletter'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate')

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
                    <Animatedletter letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>As a skilled full-stack web developer with experience in MERN stack, I bring a wealth of knowledge and expertise to any project I work on. My ability to handle both front-end and back-end development means that I can create fully-functional web applications that meet the needs of my clients. I have an eye for detail and a commitment to excellence that ensures that every line of code I write is of the highest quality.</p>
                <p>Overall, my passion for web development and my commitment to excellence make me an ideal candidate for any recruiter looking for a skilled full-stack web developer. I am confident in my ability to bring value to any team, and I look forward to contributing to exciting new projects in the future. With my skills and experience, I am ready to take on any challenge and help create innovative, cutting-edge web applications that delight users and exceed expectations.</p>
            </Textarea>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FaReact color="#61dbfb"/>
                    </div>
                    <div className="face2">
                        <SiMongodb color="#3fad37"/>
                    </div>
                    <div className="face3">
                        <SiExpress color="#000"/>
                    </div>
                    <div className="face4">
                        <FaNodeJs color="#6ba063"/>
                    </div>
                    <div className="face5">
                        <AiFillGithub color="#000"/>
                    </div>
                    <div className="face6">
                        <AiFillHtml5 color="#e34f26"/>
                    </div>
                </div>
            </div>
        </Container>
        <Loader type='pacman'/>
    </>
  )
}

export default About