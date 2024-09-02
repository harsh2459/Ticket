import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = (props) => {

    return (
        <>
            <Container>
                <Row>
                    {
                        props.list.map((item) => {
                            return (
                                <div className="col-lg-4 my-4">
                                    <div className='movic-img'>
                                        <Link to={`${item.id}`}>
                                        <img src={item.img} />
                                        </Link>
                                        <div className="d-flex img-info">
                                            <p>{item.tital}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Home