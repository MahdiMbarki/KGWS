//import './Kompar.css';
import { KomparSlider } from '../Common';
function Kompar() {
    return (
        <div className="komparcontainer">
            <KomparSlider />
            <div className="komparinfocontainer">
                <ul >
                    <li>
                        <h2 className='komparheader'>KOMPAR-GROUPE</h2>
                        <hr />
                    </li>
                    <li>
                        <p className='kompardesc'>
                            Le Groupe KOMPAR est expert dans l’accompagnement des particuliers et des entreprisespour la réduction des factures d’énergies, de télécommunication,et l’optimisation des frais généraux.
                            Partenaire des plus grands fournisseurs français, KOMPAR se positionne comme le tiers de confiance privilégié de ses clients et leur apporte la solution la plus adaptée à leurs besoins.
                            Présent sur toute la France et à l’étranger, nos équipes sont à l’écoute de nos clients professionnels.
                            Nous offrons à nos clients, un accompagnement Personnalisé, un partenariat gagnant/gagnant, une transparence totale.
                        </p>
                    </li>
                    <li>
                        <div className='kdc' >
                            <div className='kompardetails'>
                                <label> CATEGORY:</label>
                                <p>Business</p>
                            </div>
                            <hr className='kds' />
                            <div className='kompardetails'>
                                <label>TAGS:</label>
                                <p>Comparateur,centre d'appel, conperatif</p>
                            </div>
                            <hr className='kds' />
                            <div className='kompardetails'>
                                <label>DATE OF RELEASE:</label>
                                <p>January 22, 2015</p>
                            </div>
                            <hr className='kds' />
                        </div>
                    </li>

                </ul>
            </div>

        </div>
    );

}
export default Kompar;