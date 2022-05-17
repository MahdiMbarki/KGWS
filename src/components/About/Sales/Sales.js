import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sales.css'
function Sales() {
    return (
        <div className='sales'>
            <Container>
                <Row>
                <Col>  <img src={require('../../../images/sales/1.png')}  alt="kompar" /></Col>

                    <Col>
                        <div>
                            <h3>Solutions OUTSOURCING & Force de vente supplétive</h3>
                            <p>Si votre entreprise est en progression? Vous aurez des objectifs liés aux ventes, aux objectifs commerciaux et à la rentabilité. En tant que centre de contact multicanal, KOMPAR vous permet d’obtenir des informations à jour et fiables sur vos progrès vers vos objectifs les plus prioritaires. Notre mission est de traduire les nombreux flux de données provenant des équipes de vente, du personnel du service clientèle, du marketing et de la surveillance des médias sociaux en informations commerciales utiles.</p>

                        </div>
                        <div>
                            
                        </div>

                    </Col>
                </Row>

            </Container>

        </div>
    );
}
export default Sales;