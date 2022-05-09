import "./Icontext.css";


function Icontext(props) {
    return (
        <div className="icontextcontainer">
            <div className="sideicon">
                {props.icon}
            </div>
            <div className="icontext">
                {props.text}
            </div>

        </div>
    );
}
export default Icontext;