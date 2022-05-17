import img2 from '../../images/Aboutpage/first.jpg'
import img3 from '../../images/Aboutpage/clients.png'
import img4 from '../../images/Aboutpage/calls.jpg'
import img5 from '../../images/Aboutpage/promotion.jpg'
function Keynumbers() {
    return (
        <div>
            <div class="blog-head text-center">
                <h2>QUELQUES CHIFFRES CLES</h2>
            </div>

            <section className='containerbottom'>
                <ul>

                 
                        <li>
                            <img
                                src={img2}
                                width="100"
                                height="100"
                                alt='first'
                            />
                            <div className='icontext'>
                                1er distributeur chez plusieurs fournisseurs
                            </div>
                        </li>

                        <li>
                            <img
                                src={img3}
                                width="100"
                                height="100"
                                alt='first'
                            />
                            <div className='icontext'>
                                + de 80 000 clients nous ont fait confiance
                            </div>
                        </li>

                   
                 

                        <li>
                            <img
                                src={img4}
                                width="100"
                                height="100"
                                alt='first'
                            />

                            <div className='icontext'>+ de 100 000 appels sortants par jour</div></li>
             

                        <li>
                            <img
                                src={img5}
                                width="100"
                                height="100"
                                alt='first'
                            />
                            <div className='icontext'>
                                Une force de vente de 350 téléprospecteurs</div></li>
                   

                </ul>
            </section>

        </div>
    );
}
export default Keynumbers