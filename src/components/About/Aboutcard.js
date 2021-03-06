import Card from 'react-bootstrap/Card';

import React from 'react';

function Aboutcard(props) {


    return (

        <div className='cardcontainer' >
            <Card className='card-solution'>
                <div className='cardicontainer' >


                    <img src={props.icon}>

                    </img>



                </div>
                <Card.Body className='cardbody'>
                    <Card.Title className='cardtitle' >
                        {props.title}
                    </Card.Title >
                    <hr />
                    <Card.Text className='cardtext'>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
}
export default Aboutcard;