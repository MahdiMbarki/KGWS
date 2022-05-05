import { send } from '@emailjs/browser';
import React from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import './Contact.css';
import {FormModal} from '../Common';

const Mailer = () => {
  const [modalShow, setModalShow] = React.useState(false);
    const [name, set_name] = useState('');
    const [subject, set_subject] = useState('');
    const [email, set_email] = useState('');
    const [message, set_message] = useState('');
    const handleName = (e) => {
        set_name(e.target.value)

    }
    const handleSubject = (e) => {
        set_subject(e.target.value)
    }
    const handleEmail = (e) => {
        set_email(e.target.value)
    }
    const handleMessage = (e) => {
        set_message(e.target.value)
    }
    const sendmail = (e) => {
        e.preventDefault();
        send(
            'service_xubtxci',
            'template_2dn7xkw',
            { name, subject, email, message },

            "AbTDyISi7RsFHv7oD"
        ).then((response) => {
            console.log('message sent', response.status, response.text)
            setModalShow(true)
        })
            .catch((err) => {
                console.log('failed', err)
            })


    }
    return (
        <div className='forms'  id='Contact' >
           <div class="nine">
  <h1>Contactez-nous<span>Tagline Keywords</span></h1>
</div>
         <Form onSubmit={sendmail}>

         <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nom*</Form.Label>
      <Form.Control type="text"   onChange={handleName}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Prénom*</Form.Label>
      <Form.Control type="text" onChange={handleSubject}/>
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email*</Form.Label>
      <Form.Control type="email"  onChange={handleName}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Téléphone</Form.Label>
      <Form.Control type="text"  onChange={handleSubject}/>
    </Form.Group>
  </Row>

<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Sujet</Form.Label>
    <Form.Control type='text' onChange={handleEmail} />
  </Form.Group>
  </Row>

<Row>
  <Form.Group as={Col}  controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea*</Form.Label>
    <Form.Control as="textarea" rows={3}  onChange={handleMessage} />
  </Form.Group>
  </Row>
<div className='BtnContainer'>
  <button variant="primary" type="submit" className='ContactBtn' >
    Envoyer
  </button>
  </div>
</Form>
<FormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        Header="Message Envoyé"
        text="Thank You For Contacting Us" />
        </div>
       
    );

}
export default Mailer;