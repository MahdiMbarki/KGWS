import React from "react";
import { useState } from 'react';
import Axios from 'axios';
import { BsFacebook, BsLinkedin, } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';
import { LinkContainer } from "react-router-bootstrap";
import { FormModal } from '../Common';
import { data } from '../Common'
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
                        <li><a href="/#About" >Qui sommes nous</a></li>
                        <li><a href="">Mentions légales</a></li>
                        <li><a href="">Terms and Condition</a></li>
                        <li><a href='/#News'>Actualités et article</a></li>

                    </ul>
                </section>
                <section className="footer-info">
                    <ul>
                        <h6>Produit</h6>
                        <li><a href="/#whyjoin">Energie</a></li>
                        <li><a href="/#whyjoin">Mutuelle et Santé </a></li>
                        <li><a href="/#whyjoin">Internet et Mobile</a></li>
                        <li><a href="/#whyjoin">ASSURANCE Habitation</a></li>

                    </ul>

                </section>

                <section className="footer-info">
                    <ul>
                        <h6> Lien </h6>
                        <LinkContainer to='/'>
                            <li>Acceuil</li>
                        </LinkContainer>
                        <LinkContainer to='/Partenariat'>
                            <li>partenariat</li>
                        </LinkContainer>
                        <li > <a href="/#Services">Service </a></li>
                        <li ><a href="/#Contact"> Contact</a></li>

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

            </section>
            <hr />
            <div >
                <section id="contactinfo">
                    {data ? data.footer.contact.map((d, i) => (
                        <div key={i} id="contactvia">
                            <label>
                                {d[0]}
                            </label>
                            <p>
                                {d[1]}
                            </p>

                        </div>

                    )) : "loading..."}

                </section>

            </div>

            <div>
                <section className="foootercr">
                    <div>
                        <LinkContainer to="/">
                            <img alt="" src={require('../../images/Logo.png')} id="logofooter" />
                        </LinkContainer>
                    </div>
                    <p> © Copyright 2021 - KOMPAR GROUP. All rights reserved.</p>
                </section>
            </div>


            <FormModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                Header="Message Envoyé"
                text="Thank You For Contacting Us" />
        </footer >
    );
}
export default Footer;
