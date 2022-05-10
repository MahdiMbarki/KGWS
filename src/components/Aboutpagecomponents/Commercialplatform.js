import { Teleprospection, Televente } from "../Common"
import img1 from '../../images/Aboutpage/platformecommerciale.png'
function Commercialplatform() {
    return (
        <div className="cp">
            <div className="row">
                <div className="col-lg-6">
                    <img className="w-100 shadow" src={img1} alt='kompar' />

                </div>
                <div className="col-lg-4">
                    <div className='platformecommerciale' >
                        <h2 className="display-4">PLATEFORME COMMERCIALE</h2>
                        <p className="lead">Notre plateforme commerciale se positionne comme un accélérateur de croissance qui vient booster votre force de vente avec un dispositif de marketing multicanal qui vous accompagne tout au long de votre parcours prospect/ client pour garantir une relation « win-win » unique. </p>
                    </div>
                </div>
            </div>
            <Televente />
            <Teleprospection />
        </div>
    );
}
export default Commercialplatform;