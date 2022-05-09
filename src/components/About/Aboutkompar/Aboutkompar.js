import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';




function Aboutkompar() {
    return (
        <div className="kompar"> 
            <div >
            <Container>
                <Row>

                <Col className='about-image'>  <img src={require('../../../images/page-header.jpg')} alt="kompar"/>
                 </Col>
                    <Col>
                        <div className='about'>
                            <h3>KOMPAR GROUPE</h3>
                           <p>Est expert dans l’accompagnement des particuliers et des entreprisespour la réduction des factures d’énergies, de télécommunication,et l’optimisation des frais généraux.
Partenaire des plus grands fournisseurs français, KOMPAR se positionne comme le tiers de confiance privilégié de ses clients et leur apporte la solution la plus adaptée à leurs besoins.
Présent sur toute la France et à l’étranger, nos équipes sont à l’écoute de nos clients professionnels.
Nous offrons à nos clients, un accompagnement Personnalisé, un partenariat gagnant/gagnant, une transparence totale.</p>
<Button href="#">En Savoir Plus</Button> 

                        </div>
                        
                    </Col>
                   
                </Row>

            </Container>

            </div>

        </div>
    );

}
export default Aboutkompar;