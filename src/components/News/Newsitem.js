import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function News(props) {
    return (
        <div className='Newsitem'>
            <Card className='test'>
                <div >
                <img src={props.icon} alt="" />
                </div>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>
                        {props.title}
                    </Card.Title>
                    <Card.Text >
                        {props.text}
                    </Card.Text>
                    <Button variant="primary">{props.button}</Button>
                </Card.Body>
            </Card>
            <div>
            
            </div>

        </div>
    );
}
export default News;