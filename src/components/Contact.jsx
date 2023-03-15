import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

import Animatedletter from './Animatedletter'
import { Container } from './Home'
import { Textarea } from './Home'
import Loader from 'react-loaders'

const ContactForm = styled.form`
    margin-top: 24px;
    width: 40%;

    & li {
        list-style: none;
        overflow: hidden;
        display: block;
        position: relative;
        opacity: 0;
        animation: fadeInUp 2s 2s;
        animation-fill-mode: forwards;
        clear: both;
    }

    & li.half {
        width: 49%;
        float: left;
        clear: none;
    }

    & li.half:nth-child(2n) {
        margin-left: 8px;
    }

    input[type="text"], input[type="email"], textarea {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #fff;
        background: rgb(169, 168, 168);
        color: #fff;
        font-size: 16px;
        height: 36px;
        margin-bottom: 8px;
        outline: none;
    }

    textarea {
        height: 100px;
    }
`

const Infomap = styled.div`
    font-family: 'Lexend', sans-serif;
    font-size: 12px;
    background: #000;
    width: 220px;
    padding: 16px;
    color: #fff;
    position: absolute;
    z-index: 100000;
    top: -20px;
    right: 450px;
    animation: fadeIn 1s 1.5s;
    animation-fill-mode: forwards;

    &>span {
        color: #BAFF39;
    }
`

const Mapwrapper = styled.div`
    position: absolute;
    top: -50px;
    width: 400px;
    height: 500px;
    background: #000;
    right: 280px;
    animation: backInRight 1s 1.2s;
    animation-fill-mode: forwards;
`

const Contact = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_f9uy8cr','template_toe6b64', form.current, 'BPbTUDqlcESE-MxUO')
            .then((response) => {
                alert('Message sent, I will get back to you soon!')
                window.location.reload(false)
            }, (err) => {
                alert('Message failed to send, please try again later.')
            });
    }

  return (
    <>
        <Container>
            <Textarea>
                <h1>
                    <Animatedletter letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>I'm interested in freelance opportunities - especially ambitious or larger projects. However, if you have other requests or question, don't hesitate to contact me using below form either.</p>
                <ContactForm ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name='from_name' placeholder='Name' required/>
                        </li>
                        <li className="half">
                            <input type="email" name='email' placeholder='Email' required/>
                        </li>
                        <li>
                            <input type="text" name='subject' placeholder='Subject' required/>
                        </li>
                        <li>
                            <textarea name='message' placeholder='Message' required></textarea>
                        </li>
                        <li>
                            <input type="submit" value='Send' className='flat-button'/>
                        </li>
                    </ul>
                </ContactForm>
            </Textarea>
            <Mapwrapper>
                <MapContainer center={[27.69423417753399, 85.31882609663856]} zoom={13} style={{width: "100%", height: "100%"}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <Marker position={[27.69423417753399, 85.31882609663856]} icon={new Icon({iconUrl: markerIconPng, iconSize: [20, 30], iconAnchor: [12, 41]})} >
                        <Popup>
                            Sudeep lives here, come over for a cup of coffee:)
                        </Popup>
                    </Marker>
                </MapContainer>
            </Mapwrapper>
            <Infomap>
                Thapathali Engineering Campus
                <br />
                Bhadrakali Marg, Thapathali
                <br />
                Kathmandu 44617, Nepal
                <br />
                <br />
                <span>pong32btl@gmail.com</span>
            </Infomap>
        </Container>
        <Loader type="pacman" />
    </>
  )
}

export default Contact