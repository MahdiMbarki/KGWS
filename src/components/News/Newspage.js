
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
            <div className="Newsarticle">
                {props.fullarticle}
            </div>
            <hr />

        </div>
    );
}
export default Newspage;