import React from 'react';
import Slide from "react-reveal/Slide"

function Howwefunction() {
    return (
        <div>
            <div className="blog-head text-center">
                <h2>COMMENT NOUS FONCTIONNONS</h2>
                <h6></h6>
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
                                        <Slide right>
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
                                        </Slide>
                                    </div>




                                    <div className="row">
                                        <div className="col-12">
                                            <div className="timeline-year">
                                                <p>2</p>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row timeline-left">
                                        <Slide left>
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
                                        </Slide>
                                    </div>

                                    <div className="timeline-end">
                                        <p>3</p>
                                    </div>

                                    <div className="row timeline-right">
                                        <div className="col-md-6">
                                        </div>
                                        <Slide right>
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
                                        </Slide>
                                    </div>
                                    <div className="timeline-end">
                                        <p>4</p>
                                    </div>

                                    <div className="row timeline-left">
                                        < Slide left>
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
                                        </Slide>
                                        <div className="col-md-6 d-md-block d-none">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Howwefunction