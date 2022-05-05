import React from "react";
import { useState } from 'react';
import Axios from 'axios';
import { BsFacebook, BsLinkedin, } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';
import { LinkContainer } from "react-router-bootstrap";
import { FormModal } from '../Common';

import './Footer.css';


function Footer() {

    const [modalShow, setModalShow] = React.useState(false);

    const [mail, setmail] = useState('');

    const subscribe = () => {
        Axios.post('http://localhost:3001/api/newsletter',
            {
                mail: mail,

            }).then((response) => {
                console.log('message sent', response.status, response.text)

            })
            .catch((err) => {
                console.log('failed', err)
            });
        setModalShow(true);
    }
    return (
        <footer>
            <section className="footer">
                <section className="footer-info">
                    <ul>
                    <h6> kompar</h6>
                        <li>Qui sommes nous
                        </li>
                        <li>Mentions légales</li>
                        <li>Terms and Condition</li>
                        <li>Actualités et article</li>

                    </ul>
                </section>
                <section className="footer-info">
                    <ul>
                        <h6>Produit</h6>
                        <li>Energie
                        </li>
                        <li>Mutuelle et Santé</li>
                        <li>Internet et Mobile</li>
                        <li>ASSURANCE Habitation</li>

                    </ul>

                </section>

                <section className="footer-info">
                    <ul>
                       <h6> Lien </h6>
                        <li>Acceuil
                        </li>
                        <li>partenariat</li>
                        <li>Service</li>
                        <li> Contact</li>

                    </ul>

                </section>
                <section className="footer-info">
                    <ul>
                    <h6> Inscription à notre newsletter</h6>
                        <li>
                            <p>Recevez les dernières nouvelles sur le marché d'energie en france</p>
                        </li>
                        <li>
                            <input className="nli" type='email' onChange={(e) =>
                                setmail(e.target.value)} placeholder='email adresse' />
                            <button className="nlb" onClick={subscribe}><IoIosSend /></button>
                        </li>
                        <a target="_blank" href='https://linkedin.com'>
                            <BsLinkedin size={20} className="smi" /></a>
                        <a target="_blank" href='https://facebook.com'>
                            <BsFacebook size={20} className="smi" />
                        </a>
                    </ul>

                </section>
                <section className="foootercr">
                <div>
                    <img alt="" src={require('../../images/Logo.png')} />
                </div>
                <p> © Copyright 2021 - KOMPAR GROUP. All rights reserved.</p>
            </section>
            </section>
           
            <FormModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                Header="Message Envoyé"
                text="Thank You For Contacting Us" />
        </footer >
    );
}
export default Footer;
