import './Kompar.css';
import { KomparSlider, data } from '../Common';
function Kompar() {
    return (
        <div className="komparcontainer">
            <KomparSlider />
            <div className="komparinfocontainer">
                <h2 className='komparheader'>{data.page2.kompar.title}</h2>
                <hr />
                <ul >
                    <li>

                    </li>
                    <li>
                        <p className='kompardesc'>
                            {data.page2.kompar.text}

                        </p>
                    </li>
                    <li>
                        <div className='kdc' >
                            {data ? data.page2.kompar.details.map((d, i) => (
                                <div key={`${d}-${i}`}>
                                    <div className='kompardetails'>
                                        <label>{d[0]}</label>
                                        <p>{d[1]}</p>
                                    </div>
                                    <hr />
                                </div>

                            )) : 'loading...'}

                        </div>
                    </li>

                </ul>
            </div>

        </div>
    );

}
export default Kompar;