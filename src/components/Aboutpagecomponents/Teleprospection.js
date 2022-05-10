import React from 'react';
import { BsCalendarCheck, BsPersonCheck } from 'react-icons/bs'
import { Icontext } from "../Common"


function Teleprospection() {
    return (
        <div>
            <div class="blog-head text-center">
                <h2>LA TÉLÉPROSPECTION</h2>
                <h6>La téléprospection, pour vous recentrer sur votre cœur de métier !</h6>
            </div>
            <div className="icontextgroup" >
                <Icontext icon={React.createElement(BsCalendarCheck, { size: '3em' })} text="Spécialiste de la téléprospection, notre plateforme commerciale emploie des techniques de téléprospection élaborées qui nous permettent de cibler efficacement vos prospects et donc de vous fixer des rendez-vous profes¬sionnels de qualité lors desquels vous pourrez présenter plus en détails vos offres et services" />
                <Icontext icon={React.createElement(BsPersonCheck, { size: '3em' })} text="Nous menons aussi des campagnes de téléprospection ciblées pour vous générer des leads qualifiés." />
            </div>
            <div className='Aboutpagetext'>
                <p >
                    ✓ Vous multipliez donc vos chances de signer de nouveaux contrats et vous évitez la perte de temps ainsi que de longues heures infructueuses de téléprospection.
                    Vos commerciaux peuvent donc se concentrer sur le cœur de métier : vendre

                </p>
            </div>
        </div>
    );
}
export default Teleprospection