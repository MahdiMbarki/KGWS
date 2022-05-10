import React from "react";
import { BsCalendarCheck, BsPersonCheck } from 'react-icons/bs'
import { Icontext } from "../Common"

function Televente() {
    return (
        <div className="televente">
            <div class="blog-head text-center">
                <h2>LA TÉLÉVENTE</h2>
                <h6>Augmentez vos part de marché gràce a notre force commercial ! </h6>
            </div>
            <div className="icontextgroup" >
                <Icontext icon={React.createElement(BsCalendarCheck, { size: '3em' })} text="Nous développons avec vous une véritable stratégie de télévente et nous mettons en place un fichier de prospects qualifiés et pertinents pour viser la cible définie et assurer un bon taux de joignabilité" />
                <Icontext icon={React.createElement(BsPersonCheck, { size: '3em' })} text="Nos commerciaux sédentaires dotés d une force de vente s’approprieront à vos produits et services pour les commercialiser auprès de vos prospects : De l’élaboration et l’envoi de vos devis jusqu’à la commande en passant par les relances commerciales." />
            </div>
            <div className='Aboutpagetext'>
                <p >
                    ✓  Grâce à un script bien élaboré, un ciblage pertinent et une qualification intelli-gente de vos prospects, nos télévendeurs se chargent de négocier pour vous et de conclure le plus efficacement possible avec vos clients.Une offre sur mesure et des tarifs compétitifs vous seront proposés, N'hésitez pas à nous contacter!

                </p>
            </div>
        </div>
    );
}
export default Televente