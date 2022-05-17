import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';
import { Breadcrumb } from 'react-bootstrap';
import { data } from "../Common"

import './newspage.css';
const Newspage = (props) => {
    return (

        <div style={{ marginTop: '70px' }}  >
            <div className='newspages'>

                <Breadcrumb className='Breadcrumb'>
                    <Breadcrumb.Item href="/">Acceuil</Breadcrumb.Item>
                    <Breadcrumb.Item href="/#News">Actualités</Breadcrumb.Item>
                    <Breadcrumb.Item active>Article</Breadcrumb.Item>
                </Breadcrumb>

                <div className='articledetails'>
                    <ul className='.list-inline'>
                        <li> <FaRegCalendarAlt /> {props.date}</li>
                        <li> <FaRegUser />Par {props.author}</li>
                    </ul>
                </div>
            </div>
            <div >
                <h2>{props.title}</h2>
                <hr />
            </div>
            <div className="blog">

                <div className="Newspage">
                    <img className="Newspageimg" src={props.img} />
                    <div className="Newssubtitle">
                        {props.subtitle}
                    </div>
                    <div className="Newsarticle">
                        {props.fullarticle}
                    </div>
                    <hr />

                </div >

                <div className="sidebar">
                    <div className='popularposts'>
                        <h3> POPULAR POSTS</h3>
                        {data ? data.news.map((d, i) => (
                            <div className='post' key={i} >
                                <div>
                                    <img src={d.image} alt="article picture" />
                                </div>
                                <div>
                                    <a href={d.path}>
                                        {d.title}
                                    </a>
                                    <p>
                                        {d.date}
                                    </p>
                                </div>
                            </div>
                        )) : "loading..."}
                    </div>
                </div>
            </div>

        </div>

    );
}
export default Newspage;