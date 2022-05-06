import { BsMegaphone } from 'react-icons/bs';
import { MdOutlineHeadsetMic } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineBarChart } from 'react-icons/ai';
import { FiTarget } from 'react-icons/fi';
import { FaRegHandshake } from 'react-icons/fa';
import { Solutionscard, data } from '../Common';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import './Services.css';

function Services() {
    let arr = [];
    for (let j = 0; j < data.services.length; j++) {
        arr.push(data.services[j].icon);
        console.log(arr);
    }

    return (
        <div id='Services'>

            <div class="nine">
                <h1>Nos services<span> Développez des relations plus solides avec vos clients</span></h1>
            </div>
            <div className='servicescards'>
                {data ? data.services.map((d, i) => (
                    <div key={`${d}-${i}`} >
                        <Solutionscard icon={d.icon} title={d.title} text={d.text} />
                    </div>
                )) : 'loading..'}

                {            /* <Col>
                        <Solutionscard icon={React.createElement(BsMegaphone, { size: '4em' })} title="ACQUISITION - TÉLÉVENTE" text="Télévente, cross selling, up selling, réactivation de contrats, renouvellement..." />
                    </Col>
                    <Col>
                        <Solutionscard icon={React.createElement(MdOutlineHeadsetMic, { size: '4em' })} title="TÉLÉPROSPECTION" text="Génération de leads, détection d’opportunités, prise de Rendez-vous, qualification de fichiers, création de trafic sur point de vente" />
                    </Col>
                    <Col>
                        <Solutionscard icon={React.createElement(RiTeamLine, { size: '4em' })} title="SERVICE CLIENT" text="Service client, demande de renseignement, hotline technique, SAV Service client, demande de renseignement, hotline technique, SAV" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Solutionscard icon={React.createElement(AiOutlineBarChart, { size: '4em' })} title="ETUDES MARKETING" text="enquêtes de satisfaction, sondages, baromètres" />
                    </Col>
                    <Col>
                        <Solutionscard icon={React.createElement(FiTarget, { size: '4em' })} title="DÉLÉGATION COMPÉTENCES" text="La garantie de la proximité active avec vos métiers, l’assurance de la synergie des équipes dédiées à vos projets." />

                    </Col>
                    <Col>
                        <Solutionscard icon={React.createElement(FaRegHandshake, { size: '4em' })} title="FIDÉLISATION -RÉTENTION" text="Scoring client, cellule de rétention, optimisation des scripts et technique de rétention, campagnes anti-churn" />
                    </Col> */}


            </div>
        </div>
    );
}
export default Services;