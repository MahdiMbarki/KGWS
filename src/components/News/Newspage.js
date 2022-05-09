
import './newspage.css';
const Newspage = (props) => {
    return (
        <div className="Newspage">
            <img className="Newspageimg" src={props.img} />
            <div >
                <h2>{props.title}</h2>
                <hr />
            </div>
            <div className="Newssubtitle">
                {props.subtitle}
            </div>
            <div class="title">
  <h2>COMMENT NOUS FONCTIONNONS</h2>
</div>
<div class="timeline">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="timeline-container">
          <div class="timeline-end">
            <p>1</p>
          </div>
          <div class="timeline-continue">

            <div class="row timeline-right">
              <div class="col-md-6">
                  
              
              </div>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon">
                    <i class="fa fa-gift"></i>
                  </div>
                  <div class="timeline-text">
                  <h3> Formation</h3>
                    <p>cellule de formation : des formateurs de haut niveau assurent la formation de nos téléopérateurs aus spécifités de votre domaine et de votre entreprise ainsi qu'aux exigences de votre demande.</p>
                  </div>
                </div>
              </div>
            </div>

             
            

            <div class="row">
              <div class="col-12">
                <div class="timeline-year">
                  <p>2</p>
                </div>
              </div>
            </div>

          

            <div class="row timeline-left">
              
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon d-md-none d-block">
                    <i class="fa fa-cogs"></i>
                  </div>
                  <div class="timeline-text">
                    <h3>Intégration : Phase test</h3>
                    <p>Supérviseur: suivi, briefing et recadrage des téléopérateurs</p>
                  </div>
                  <div class="timeline-icon d-md-block d-none">
                    <i class="fa fa-cogs"></i>
                  </div>
                </div>
              </div>
            
            </div>

            <div class="timeline-end">
            <p>3</p>
          </div>

            <div class="row timeline-right">
              <div class="col-md-6">
              </div>
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon">
                    <i class="fa fa-running"></i>
                  </div>
                  <div class="timeline-text">
                  <h3>Evaluation</h3>
                    <p>Cellule de qualité: Un reporting régulier évaluant la performance de chaque téléopérateur et précisant les point à améliorer</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline-end">
            <p>4</p>
          </div>

            <div class="row timeline-left">
             
              <div class="col-md-6">
                <div class="timeline-box">
                  <div class="timeline-icon d-md-none d-block">
                    <i class="fa fa-home"></i>
                  </div>
                  <div class="timeline-text">
                    <h3>Phase opérationnelle</h3>
                    <p>Un Supérviseur et un chef de plateau : veille à l'atteinte des objectifs fixés au préable avec vous et en coordination étroite avec le département qualité</p>
                  </div>
                  <div class="timeline-icon d-md-block d-none">
                    <i class="fa fa-home"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-md-block d-none">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            <div className="Newsarticle">
                {props.fullarticle}
            </div>
            <hr />

        </div>
    );
}
export default Newspage;