import { Newsitem } from '../Common';
import newsimg from '../../images/news/n1.jpg';
import newsimg2 from '../../images/news/n2.jpg';
import newsimg3 from '../../images/news/n3.jpg';
import './News.css';

function News() {
    return (
        <div>
             <div  className='title-news' >
            <h2 className='heaader'>DERNIÈRES ACTUALITÉS</h2>
           
        </div>
        <div className='News'>
            <div className='item-News'>
            <Newsitem  icon={newsimg}  title='DÉMÉNAGEMENT-CONTRAT D`ÉLECTRICITÉ' text='Changer de logement est l`occasion rêvée de remettre en question ses contrats d`énergie et de choisir un fournisseur moins cher. les particuliers peuvent choisir leur fournisseur librement, et résilier à tout moment. Mais, quel est le fournisseur le moins cher ? Et surtout : comment trouver le meilleur fournisseur d`énergie lorsque l`on déménage ?' button='Compare les fournisseurs' />
            </div>
            <div className='item-News'>
            <Newsitem icon={newsimg2}   title='L`ÉLECTRICITÉ À PRIX COUTANT' text='En 2023, tous les fournisseurs de plus de
200 000 clients devront proposer une offre d`électricité à prix de marché. Son autre nom ? Le « tarif dynamique ». C`est un prix qui varie chaque heure, chaque jour. Il est déterminé par l`offre et la demande . Voici pourquoi, comme l`Europe, nous croyons dur comme fer en cette tarification d`avenir.' button='Découvrir plus d`information' />
            </div>
            <div className='item-News'>
            <Newsitem icon={newsimg3}   title='COMPARATEUR DE PRIX AVANTAGES' text='simple et rapide , Notre comparateur de prix ne présente que des avantages dans tous les secteurs d`activité : commerce , industrie, artisanat, agriculture, professions libérales réglementées…. Il permet de réaliser d`importantes économies tout en étant beaucoup plus précis qu`un moteur de recherche classique.' button='Optimiser ma consomation' />
            </div>
            </div>
            </div>
            
        
    );
}
export default News;
