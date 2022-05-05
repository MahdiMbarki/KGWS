
const Newspage = (props) => {
    return (
        <div>
            <img src={props.img} />
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                {props.subtitle}
            </div>
            <div>
                {props.fullarticle}
            </div>

        </div>
    );
}
export default Newspage;