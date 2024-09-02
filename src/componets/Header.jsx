import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Container>
                <Row>
                    <div className="col-lg-3 img">
                        <Link to="/">
                            <img src={require('../img/images.jpeg')} alt="Logo" />
                        </Link>
                    </div>
                    <div className="col-lg-9 my-5">
                        <ul className='d-flex mainmenu'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/payment">Your Ticket</Link></li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Header;