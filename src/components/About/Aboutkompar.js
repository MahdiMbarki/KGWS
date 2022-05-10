import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { data } from '../Common'
import { LinkContainer } from 'react-router-bootstrap';
function Aboutkompar() {
    return (
        <div className="kompar">
            <div >


                <div class="blog-head text-center">
                    <h2>À PROPOS</h2>
                    <h6>Qui sommes nous</h6>
                </div>
                <Container>
                    <Row>

                        <Col className='about-image'>  <img src={data.about.image} alt="kompar" />
                        </Col>
                        <Col>
                            <div className='about'>
                                <h3>{data.about.title}</h3>
                                <p>{data.about.paragraph}</p>
                                <LinkContainer to='/Aboutpage' >
                                    <Button href={data.about.href}>{data.about.button}</Button>
                                </LinkContainer>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </div>

        </div>
    );

}
export default Aboutkompar;