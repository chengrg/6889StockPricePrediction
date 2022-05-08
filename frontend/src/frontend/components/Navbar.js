import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import nasdaq from './nasdaq.png'
import twitter from './twitter.png'

const Navigation = () => {
    return (
        <Navbar expand="lg" bg="info">
            <Container>
            <Navbar.Brand href = "http://localhost:3000/">
                    <img src={logo} width='60' height='52' className='' alt='' />
                    &nbsp; ELEN 6889 Stock Price Prediction
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className='me-auto'>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav pullRight>
                    <Nav.Link href="https://www.nasdaq.com/">
                    <img src={nasdaq} width='60' height='52' className='' alt='' />
                    </Nav.Link>
                    <Nav.Link href="https://www.twitter.com/">
                    <img src={twitter} width='60' height='52' className='' alt='' />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;