import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'

const Info = (props) => {

    const { id } = useParams();

    const final = props.list.filter(item => item.id === id)
    console.log(final);

    return (
        <>
            <h1 className='text-center'>Info</h1>

            <div className="container">
                <div className="row">
                    {
                        final.map((item) => (
                            <div className='my-5 d-flex'>
                                <div className="col-lg-6 detail-img">
                                    <img src={item.img} />
                                </div>
                                <div className="col-lg-6 detail-info">
                                    <h3>{item.tital}</h3>
                                    <span>{item.language}</span>
                                    <h5>{item.Release}</h5>
                                    <h6>{item.time}</h6>
                                    <Link to="/hollbooking">
                                        <Button variant="outline-secondary">Ticket Booking</Button>{' '}
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Info;