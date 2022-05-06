import './Whyjoin.css';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { ImConnection } from "react-icons/im";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";


function Whyjoin() {


  return (



    <div id="whyjoin" >
      <div className="nine">
        <h1>Pourquoi Nous Choisir<span>Differentes Branches</span></h1>
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className='whyjoincontainer'>
          <Col >
            <Nav variant="pills" className="flex-column">
              <h1 className='navTitle'> Branche d'activité kompar</h1>
              <Nav.Item>
                <Nav.Link eventKey="first"><span className='menuIcon' ><IoIosFlash /></span> Energie  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second"><span className='menuIcon'><ImConnection /> </span> Télécom</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third"><span className='menuIcon'><MdOutlineHealthAndSafety /></span> Assurance& Sante</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth"><span className='menuIcon'><FaChartLine /></span> Force de vente  </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className='ImgTxtContainer'>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <img className='whyjoinimg' src={require('../../images/whyChoose/Energy.png')} alt="kompar" />
                <p className='whyjoinText'>
                  Distributeur des principaux acteurs de l’énergie pour les particuliers et les professionnels. Kompar accompagne ses clients dans la réalisation d’un bilan de leurs consommations énergétique afin de leur proposer l’offre la plus adaptées a leurs besoins. Depuis le 01 janvier 2007 le marché de l’énergie est ouvert à la concurrence. Cela signifie la fin du monopole d’état des fournisseurs historiques EDF et GDF et l’apparition des fournisseurs alternatifs. Quel que soit le fournisseur d’énergie, la qualité est toujours la même parce que le réseau est commun et alimente tous les compteurs. N’oublions pas que l’énergie c’est 7% des dépenses des ménages en France, soit 2300€ en moyenne par ménage et par an.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img className='whyjoinimg' src={require('../../images/whyChoose/Telecom.png')} alt="kompar" />
                <p className='whyjoinText'>
                  Partenaire distributeur Bouygues Telecom Entreprises, nous mettons à votre disposition nos experts en télécommunications qui vous accompagneront pour faire de votre téléphonie d’entreprises un véritable avantage concurrentiel. Bouygues Telecom est un opérateur de télécommunications français, filiale du groupe Bouygues créé en 1994. Il est historiquement le troisième des quatre opérateurs de téléphonie mobile nationaux français, apparu après Orange et SFR et avant Free mobile. Avec des offres destinées aux professionnels comme aux entreprises de plus grande taille. Vous paierez vos factures téléphoniques au juste prix. N’attendez plus et demandez votre étude personnalisée et gratuite.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <img className='whyjoinimg' src={require('../../images/whyChoose/Healthcare.png')} alt="kompar" />
                <p className='whyjoinText'>
                  KOMPAR Assurances, enregistrée à L’Orias, est la division Assurances du Groupe KOMPAR. Nos agents conseillent et accompagnent les particuliers et les professionnels dans le choix de leurs complémentaires santés. Partenaire des plus grandes compagnies d’assurances et mutuelles, nous saurons vous proposer la solution la plus adaptée à vos besoins et à ceux de vos salariés.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <img className='whyjoinimg' src={require('../../images/whyChoose/Sales.png')} alt="kompar" />
                <p className='whyjoinText'>
                  De part notre expérience dans plusieurs secteurs d’activités, nous avons développé une offre d’externalisation de force de vente dédiée aux entreprises qui souhaitent accroitre leurs parts de marché et leur chiffres d’affaires rapidement. Nous disposons de plusieurs centres de contacts avec un grand nombre de télévendeurs. Que vous souhaitiez adresser un marché de masse ou faire des opérations ciblées, que ce soit auprès des particuliers ou des professionnels, nous saurons mettre en place un partenariat « gagnant-gagnant ». Nos équipes se tiennent â votre disposition alors n’hésitez pas à faire appel à nous.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>


        </Row>
      </Tab.Container>




    </div >


  );
}
export default Whyjoin;