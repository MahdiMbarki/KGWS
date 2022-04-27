import React from "react";
import { useState } from 'react';
import Axios from 'axios';
import { BsInstagram, BsFacebook, BsLinkedin, } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';
import { LinkContainer } from "react-router-bootstrap";
import './Footer.css';


function Footer() {
    const [mail, setmail] = useState('');

    const subscribe = () => {
        Axios.post('http://localhost:3001/api/newsletter',
            {
                mail: mail,

            }).then(() => {

                alert('success');
            });
    }
    return (
        <footer>
            <section className="footer">
                <section className="footer-info">
                  <ul>
                      <li><span> kompar</span></li>
                      <li>Qui sommes nous
                      </li>
                      <li>Mentions légales</li>
                      <li>Terms and Condition</li>
                      <li>Actualités et article</li>

                  </ul>
                    </section>
                    <section className="footer-info">
                  <ul>
                      <li><span> Produit</span></li>
                      <li>Energie
                      </li>
                      <li>Mutuelle et Santé</li>
                      <li>Internet et Mobile</li>
                      <li>ASSURANCE Habitation</li>

                  </ul>

                    </section>

                    <section className="footer-info">
                  <ul>
                      <li><span> Liens</span></li>
                      <li>Acceuil
                      </li>
                      <li>partenariat</li>
                      <li>Service</li>
                      <li> Contact</li>

                  </ul>

                    </section>
                    <section className="footer-info">
                        <ul>
                            <li>
                               <span> Inscription à notre newsletter</span>
                            </li>
                            <li>
                             <p>Recevez les dernières nouvelles sur le marché d'energie en france</p>
                            </li>
                            <li>
                                <input className="nli" type='email' onChange={(e) =>
                                    setmail(e.target.value)}  placeholder='email adresse' />
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
                <section className="foootercr">
                        <div>
                        <img alt="" src={require('../../images/Logo.png')} />
                        </div>
                    <p> © Copyright 2021 - KOMPAR GROUP. All rights reserved.</p>
                </section>
        </footer >
    );
}
export default Footer;

