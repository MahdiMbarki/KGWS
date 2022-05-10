import React, { useState } from 'react';
import Axios from 'axios';
import './Partnershipform.css';
import { FormModal } from '../Common';
function Partnershipform() {
    const [modalShow, setModalShow] = React.useState(false);

    const [name, setname] = useState('');
    const [adresse, setadresse] = useState('');
    const [nom_gerant, setnomgerant] = useState('');
    const [email, setemail] = useState('');
    const [contactnum, setcontactnum] = useState('');
    const [website, setwebsite] = useState('');
    const [department, setdepartment] = useState('');
    const [nombreformateur, setnombreformateur] = useState('');
    const [agentsnum, setagentsnum] = useState('');
    const [secteur, setsecteur] = useState('');
    const [agree, setAgree] = useState(false);


    const submitform = () => {
        Axios.post('http://localhost:3001/api/partners',
            {
                name: name,
                adresse: adresse,
                nom_gerant: nom_gerant,
                email: email,
                contact: contactnum,
                website: website,
                secteur: secteur,
                nombreformateur: nombreformateur,
                agentsnum: agentsnum,
                department: department,
                agree: agree

            }).then(() => {

                alert('success');
            });
        setModalShow(true);
    }
    const checkboxHandler = () => {
        // if agree === true, it will be set to false
        // if agree === false, it will be set to true
        setAgree(!agree);
        // Don't miss the exclamation mark
    }
    return (

        <div >
            <div className='blog-head text-center'>
                <h2>Contactez-nous</h2>
                <h6>Remplir La Formulaire ci-dessous</h6>
            </div>

            <form className='form'  >
                <label>Nom</label>

                <input type='text' onChange={(e) =>
                    setname(e.target.value)} />

                <label>Adresse</label>

                <input type='text' onChange={(e) =>
                    setadresse(e.target.value)} />

                <label>Nom du Gérant</label>

                <input type='text' onChange={(e) =>
                    setnomgerant(e.target.value)} />

                <label>E-mail </label>

                <input type='email' onChange={(e) =>
                    setemail(e.target.value)} />

                <label>Contact Number</label>

                <input type="text" onChange={(e) => setcontactnum(e.target.value)} />

                <label>Site Web</label>

                <input type="text" onChange={(e) => setwebsite(e.target.value)} />

                <label>Department </label>

                <select onChange={(e) => setdepartment(e.target.value)} >
                    <option value="">-Choisissez-</option>
                    <option value="Energie">Energie</option>
                    <option value="Assurance">Assurance</option>
                    <option value="Telecom">Telecom</option>
                    <option value="bank">Banque</option>
                    <option value="E-commerce">E-Commerce</option>
                    <option value="Distribution">Distrubution</option>
                    <option value="Transport">Transport</option>
                    <option value="Tourism Office">Tourism Office</option>
                    <option value="Other">Other</option>
                </select>

                <label>Nombre De Formateur</label>

                <input type="text" onChange={(e) => setnombreformateur(e.target.value)} />

                <label>Nombre D`agents</label>

                <input type="text" onChange={(e) => setagentsnum(e.target.value)} />

                <label> Type D'opération à Réaliser</label>

                <select onChange={(e) => setsecteur(e.target.value)} >
                    <option value="">-Choisissez-</option>
                    <option value="Aquisition Client">Aquisition Client</option>
                    <option value="Service Client">Service Client</option>
                    <option value="Etude et enquettes">Etude & enquetes</option>
                    <option value="Augmentation de la valeur Client">Augmentation de la valeur Client</option>
                    <option value="Fidelisation Client" >Fidelisation Client</option>
                    <option value="Back Office">BackOffice</option>
                    <option value="other">Autre</option>
                </select>

                <div className='termcheck'>
                    <input className='fcb' type="checkbox" onChange={checkboxHandler} />
                    <label className='fcl' htmlFor="agree"> I agree to terms and conditions</label>
                </div>
                <button className='fbutton' disabled={!agree} onClick={submitform}>Submit</button>



            </form>
            <FormModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                Header="Message Envoyé"
                text="Thank You For Contacting Us" />

        </div>
    );
}
export default Partnershipform;