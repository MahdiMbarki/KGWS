import { data, Newsitem } from '../Common';
import newsimg from '../../images/news/n1.jpg';
import newsimg2 from '../../images/news/n2.jpg';
import newsimg3 from '../../images/news/n3.jpg';
import './News.css';

function News() {
    return (
        <div id='News'>

            <div class="nine">
                <h1>Style Nine<span>Tagline Keywords</span></h1>
            </div>
            <div className='News'>
                {data ? data.news.map((d, i) => (
                    <div key={`${d.title}-${i}`} className='item-News'>
                        <Newsitem icon={d.image} title={d.title} text={d.subtitle} button={d.button} path={d.path} />
                    </div>
                )) : " loading.."}
            </div>
        </div>


    );
}
export default News;
