import { data, Newsitem } from '../Common';
import newsimg from '../../images/news/n1.jpg';
import newsimg2 from '../../images/news/n2.jpg';
import newsimg3 from '../../images/news/n3.jpg';
import './News.css';
import { CardGroup } from 'react-bootstrap';

function News() {
    return (
        <div id='News'>

            <div class="blog-head text-center">
            <h2>Les Nouvelles</h2>
            <h6> Rejoigner Nous Et Tous Découvrir</h6>
          </div>
            <div className='News'>

                {data ? data.news.map((d, i) => (
                    <Newsitem key={`${d.title}-${i}`} icon={d.image} title={d.title} text={d.subtitle} button={d.button} path={d.path} className='item-News' />

                )) : " loading.."}

            </div>
        </div>


    );
}
export default News;
