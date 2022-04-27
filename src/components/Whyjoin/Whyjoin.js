import './Whyjoin.css';
import { useState } from 'react'
import { Container, Row, Col, Card, Tab, Tabs, Accordion } from 'react-bootstrap';
function Whyjoin() {
    const img1 = require('../../images/slider1/1.jpg')

    const [energy, set_energy] = useState(true);
    const [source, setsource] = useState("https://img.freepik.com/free-vector/active-people-bikes-windmills-house-with-solar-panel-rooftop-flat-illustration_74855-10477.jpg?t=st=1650843782~exp=1650844382~hmac=ee9ceafc575cd1dbc5dfe3cbec0318b6f8c9ce3faeebb9e4b458cfb81be713df&w=740");

    const handleenergy = (e) => {
        set_energy(!energy)
        setsource(img1)

    }
    const [healthcare, set_healthcare] = useState(false);
    const handlehealthcare = (e) => {
        set_healthcare(!healthcare)
        setsource("https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg?t=st=1650843838~exp=1650844438~hmac=997e54910dd4a9a77d47bb6a4c89a34986dfec2c43810241d783beb99a0d955a&w=740")

    }
    const [telecom, set_telecom] = useState(false);
    const handletelecom = (e) => {
        set_telecom(!telecom)
        setsource('https://img.freepik.com/free-vector/man-transferring-money-woman-via-smartphone-online-transaction-banking-flat-vector-illustration-finance-digital-technology-concept_74855-10107.jpg?w=740')

    }
    const [solution, set_solution] = useState(false);
    const handlesolution = (e) => {
        set_solution(!solution)
        setsource('https://img.freepik.com/free-vector/bloggers-advertising-referrals-young-people-with-gadgets-loudspeakers-announcing-news-attracting-target-audience-vector-illustration-marketing-promotion-communication_74855-8244.jpg?t=st=1650844028~exp=1650844628~hmac=8bfdaf613e5bc78e23245807798f5426d99b98a9ba006edd9822833c6a8720e7&w=826')

    }
    return (
        <div >
            <h2 className="heaader"> POURQUOI NOUS CHOISIR </h2>
            <div >

                <Tabs defaultActiveKey="vision" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="vision" title="Vision">
                        <Row>

                            <Col className='vision-img'>
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?t=st=1650832712~exp=1650833312~hmac=e51b810ab048fec0a9b4df08567b5d4c083b1202cea4914a6f1a59d328a2c09b&w=740" />
                            </Col>
                            <Col>
                                <p>
                                    Toute l`équipe KOMPAR partage la même vision qui est de pouvoir offrir aux clients des solutions qui facilitent leurs activités. Ainsi le client devient le partenaire de notre évolution à travers l`évolution de ses propres besoins et l`adaptation de nos solutions. Une complémentarité professionnelle parfaite.
                                </p>
                            </Col>
                        </Row>

                    </Tab>
                    <Tab eventKey="objectif" title="Objectif">
                        <p>
                            Les objectifs immédiats de KOMPAR c`est d`abord de créer un capital confiance qui permettrait aux clients de solliciter nos services. Le développement de la marque ira donc de pair avec l`adaptation de nos solutions avec le besoin des clients.
                        </p>
                    </Tab>
                    <Tab eventKey="mission" title="Mission" >
                        <p>
                            Nos solutions bien pensées et issues d`années d`expérience de nos développeurs dans le milieu des télécommunications bénéficient d`une qualité aux normes élevées leurs permettant ainsi de faciliter la croissance des PME et des PMI.
                        </p>
                    </Tab>
                </Tabs>


            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={handleenergy}>Branche énergie </Accordion.Header>
                                    <Accordion.Body>
                                        Distributeur des principaux acteurs de l’énergie pour les particuliers et les professionnels. Kompar accompagne ses clients dans la réalisation d’un bilan de leurs consommations énergétique afin de leur proposer l’offre la plus adaptées a leurs besoins. Depuis le 01 janvier 2007 le marché de l’énergie est ouvert à la concurrence. Cela signifie la fin du monopole d’état des fournisseurs historiques EDF et GDF et l’apparition des fournisseurs alternatifs. Quel que soit le fournisseur d’énergie, la qualité est toujours la même parce que le réseau est commun et alimente tous les compteurs. N’oublions pas que l’énergie c’est 7% des dépenses des ménages en France, soit 2300€ en moyenne par ménage et par an.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item onClick={handletelecom} eventKey="1">
                                    <Accordion.Header>Branche télécom </Accordion.Header>
                                    <Accordion.Body>
                                        Partenaire distributeur Bouygues Telecom Entreprises, nous mettons à votre disposition nos experts en télécommunications qui vous accompagneront pour faire de votre téléphonie d’entreprises un véritable avantage concurrentiel. Bouygues Telecom est un opérateur de télécommunications français, filiale du groupe Bouygues créé en 1994. Il est historiquement le troisième des quatre opérateurs de téléphonie mobile nationaux français, apparu après Orange et SFR et avant Free mobile. Avec des offres destinées aux professionnels comme aux entreprises de plus grande taille. Vous paierez vos factures téléphoniques au juste prix. N’attendez plus et demandez votre étude personnalisée et gratuite.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item onClick={handlehealthcare} eventKey="2">
                                    <Accordion.Header>Branche Assurance& Sante </Accordion.Header>
                                    <Accordion.Body>
                                        KOMPAR Assurances, enregistrée à L’Orias, est la division Assurances du Groupe KOMPAR. Nos agents conseillent et accompagnent les particuliers et les professionnels dans le choix de leurs complémentaires santés. Partenaire des plus grandes compagnies d’assurances et mutuelles, nous saurons vous proposer la solution la plus adaptée à vos besoins et à ceux de vos salariés.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item onClick={handlesolution} eventKey="3">
                                    <Accordion.Header>Solutions OUTSOURCING & Force de vente supplétive </Accordion.Header>
                                    <Accordion.Body>
                                        De part notre expérience dans plusieurs secteurs d’activités, nous avons développé une offre d’externalisation de force de vente dédiée aux entreprises qui souhaitent accroitre leurs parts de marché et leur chiffres d’affaires rapidement. Nous disposons de plusieurs centres de contacts avec un grand nombre de télévendeurs. Que vous souhaitiez adresser un marché de masse ou faire des opérations ciblées, que ce soit auprès des particuliers ou des professionnels, nous saurons mettre en place un partenariat « gagnant-gagnant ». Nos équipes se tiennent â votre disposition alors n’hésitez pas à faire appel à nous.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </Col>
                        <Col>
                            <img src={source} alt='taswira' />



                        </Col>
                    </Row>
                </Container>


            </div>

        </div>
    );
}
export default Whyjoin;