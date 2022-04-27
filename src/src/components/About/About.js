import './About.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Sales, Aboutkompar, Solutionscard } from '../Common'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMedicalServices } from 'react-icons/md';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <div className="Aboutus" >
            <Tabs defaultActiveKey="Kompar" id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="Kompar" title="KOMPAR" >
                    <Aboutkompar />
                </Tab>
                <Tab eventKey="Solutions" title="SOLUTIONS" className='solutions'>
                    <Container>
                        <Row>
                            <Col>
                                <Solutionscard icon={React.createElement(AiOutlineThunderbolt, { size: '4em' })} title="BRANCHE ÉNERGIE" text="Avec notre comparateur, découvrez les différentes offres d'énergie des fournisseurs d'électricité et de gaz en 2021" />
                            </Col>
                            <Col>
                                <Solutionscard icon={React.createElement(FiPhoneCall, { size: '4em' })} title="BRANCHE TÉLÉCOM" text="Notre comparateur référence l'ensemble des offres internet fixe et des forfaits mobiles disponibles en France métropolitaine pour les particuliers " /> 
                            </Col>
                            <Col>
                                <Solutionscard icon={React.createElement(MdOutlineMedicalServices, { size: '4em' })} title="BRANCHE ASSURANCE& SANTE" text="Prise en charge de vos frais santé : soins courants, optique, dentaire, hospitalisation. Ne cherchez plus ! Choisissez la couverture santé qui vous ressemble parmi une large gamme." />
                            </Col>
                            
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="Vente" title="VENTE">
                    <Sales />
                </Tab>
            </Tabs>
        </div>
    );
}
export default About;