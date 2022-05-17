import { data, Newsitem } from '../Common';
import './News.css';

function News() {
    return (
        <div id='News'>

            <div class="blog-head text-center">
                <h2>Dernières nouvelles</h2>
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
