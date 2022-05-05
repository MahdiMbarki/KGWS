import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { data } from '../../Common'
function Aboutkompar() {
    return (
        <div className="kompar">
            <div >

                <div className="nine">
                    <h1>À PROPOS<span>Qui sommes nous</span></h1>
                </div>
                <Container>
                    <Row>

                        <Col className='about-image'>  <img src={data.about.image} alt="kompar" />
                        </Col>
                        <Col>
                            <div className='about'>
                                <h3>{data.about.title}</h3>
                                <p>{data.about.paragraph}</p>
                                <Button href={data.about.href}>{data.about.button}</Button>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </div>

        </div>
    );

}
export default Aboutkompar;