import './Aboutpage.css'
import * as Iconscg from 'react-icons/cg';
import * as Iconsbi from 'react-icons/bi';
import * as Iconsgi from 'react-icons/gi';
import { BsCalendarCheck, BsPersonCheck } from 'react-icons/bs'
import React, { useEffect, useRef } from "react";
import { data, Icontext, Solutionscard } from "../Common"

function Aboutpage() {

  const topContainer = useRef();

  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  }, []);

  let arr = [];
  let iconarr = []
  for (let j = 0; j < data.Aboutpage.card.length; j++) {
    arr.push(data.Aboutpage.card[j].icon);
    if (data.Aboutpage.card[j].icon.slice(0, 2) === "Cg") {
      iconarr.push(Iconscg[arr[j]]);
    }
    else if (data.Aboutpage.card[j].icon.slice(0, 2) === "Bi") {
      iconarr.push(Iconsbi[arr[j]]);
    }
    else if (data.Aboutpage.card[j].icon.slice(0, 2) === "Gi") {
      iconarr.push(Iconsgi[arr[j]]);
    }
    else return

  }

  return (
    <div style={{ marginTop: '200px' }} >
      <div ref={topContainer} />

      <div className="title">
        <h2>{data.Aboutpage.title}</h2>
      </div>
      <div className='difference'>

        {data ? data.Aboutpage.card.map((d, i) => (
          <Solutionscard className='differencei' key={i} icon={React.createElement(iconarr[i], { size: '4em' })} title={d.title} text={d.text} />
        )) : "loading..."}

      </div>


      <div className="title">
        <h2>COMMENT NOUS FONCTIONNONS</h2>
      </div>
      <div className="timeline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="timeline-container">
                <div className="timeline-end">
                  <p>1</p>
                </div>
                <div className="timeline-continue">

                  <div className="row timeline-right">
                    <div className="col-md-6">


                    </div>
                    <div className="col-md-6">
                      <div className="timeline-box">
                        <div className="timeline-icon">
                          <i className="fa fa-gift"></i>
                        </div>
                        <div className="timeline-text">
                          <h3> Formation</h3>
                          <p>cellule de formation : des formateurs de haut niveau assurent la formation de nos téléopérateurs aus spécifités de votre domaine et de votre entreprise ainsi qu'aux exigences de votre demande.</p>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="row">
                    <div className="col-12">
                      <div className="timeline-year">
                        <p>2</p>
                      </div>
                    </div>
                  </div>



                  <div className="row timeline-left">

                    <div className="col-md-6">
                      <div className="timeline-box">
                        <div className="timeline-icon d-md-none d-block">
                          <i className="fa fa-cogs"></i>
                        </div>
                        <div className="timeline-text">
                          <h3>Intégration : Phase test</h3>
                          <p>Supérviseur: suivi, briefing et recadrage des téléopérateurs</p>
                        </div>
                        <div className="timeline-icon d-md-block d-none">
                          <i className="fa fa-cogs"></i>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="timeline-end">
                    <p>3</p>
                  </div>

                  <div className="row timeline-right">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6">
                      <div className="timeline-box">
                        <div className="timeline-icon">
                          <i className="fa fa-running"></i>
                        </div>
                        <div className="timeline-text">
                          <h3>Evaluation</h3>
                          <p>Cellule de qualité: Un reporting régulier évaluant la performance de chaque téléopérateur et précisant les point à améliorer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-end">
                    <p>4</p>
                  </div>

                  <div className="row timeline-left">

                    <div className="col-md-6">
                      <div className="timeline-box">
                        <div className="timeline-icon d-md-none d-block">
                          <i className="fa fa-home"></i>
                        </div>
                        <div className="timeline-text">
                          <h3>Phase opérationnelle</h3>
                          <p>Un Supérviseur et un chef de plateau : veille à l'atteinte des objectifs fixés au préable avec vous et en coordination étroite avec le département qualité</p>
                        </div>
                        <div className="timeline-icon d-md-block d-none">
                          <i className="fa fa-home"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-block d-none">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img className="w-100 shadow" src="https://img.freepik.com/free-photo/business-people-shaking-hands-finishing-up-meeting-deals-business-concept_1150-2981.jpg?t=st=1652109688~exp=1652110288~hmac=1acfbbb53436137cffafe654b860fe121374e95c803e0ec3c48d69b63ec171b8&w=740" alt='kompar' />

        </div>
        <div className="col-lg-4">
          <div >
            <h2 className="display-4">PLATEFORME COMMERCIALE</h2>
            <p className="lead">Notre plateforme commerciale se positionne comme un accélérateur de croissance qui vient booster votre force de vente avec un dispositif de marketing multicanal qui vous accompagne tout au long de votre parcours prospect/ client pour garantir une relation « win-win » unique. </p>
          </div>
        </div>
      </div>

      <div className="nine">
        <h1>LA TÉLÉPROSPECTION<span> La téléprospection, pour vous recentrer sur votre cœur de métier !</span></h1>
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
      <div className="nine">
        <h1>LA TÉLÉVENTE<span> Augmentez vos part de marché gràce a notre force commercial ! </span></h1>
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
      <section className='containerbottom'>
        <ul>
          <li>
            <img
              src="https://img.freepik.com/free-vector/first-prize-ribbon-award-vector_53876-43814.jpg?t=st=1652107691~exp=1652108291~hmac=4210c85b9e3fb176e426ad056e5977d6b393d2633d817d3b8aa76f4e4fb5d0a6&w=740"
              width="100"
              height="100"
              alt='first'
            />
            <div className='icontext'>
              1er distributeur chez plusieurs fournisseurs d’energie
            </div>
          </li>

          <li>
            <img
              src="https://img.freepik.com/free-vector/online-community_24877-50878.jpg?t=st=1652107788~exp=1652108388~hmac=4e2e9cc4588ec509e4c421c0e8d7806573fef98d1385e0f1298e32ec17f87ae1&w=740"
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
              src="https://img.freepik.com/free-vector/call-center-service-illustration_24877-52388.jpg?t=st=1652099353~exp=1652099953~hmac=99e7c48c6d25ca21ed371594de8dcd603ef159da482dcef03edaa3fbdd6114cb&w=740"
              width="100"
              height="100"
              alt='first'
            />

            <div className='icontext'>+ de 100 000 appels sortants par jour</div></li>


          <li>
            <img
              src="https://img.freepik.com/free-vector/promotion-loud-speaker_1067-446.jpg?t=st=1652108036~exp=1652108636~hmac=4924a4d9bdb59f3207853058476140cd6dd5f74b97eaf281959b5f2d699e9a1c&w=740"
              width="100"
              height="100"
              alt='first'
            />
            <div className='icontext'>
              Une force de vente de 350 téléprospecteurs</div></li>
        </ul>
      </section>

    </div >





  );
}
export default Aboutpage;