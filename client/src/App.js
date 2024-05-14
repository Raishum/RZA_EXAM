
// Navbar

import './App.css';
import CookieConst from 'react-cookie-consent'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
// the diffrent pages 
import { Home } from './components/Home'
import { Hotles } from './components/Hotles'
import { About } from './components/About'
import { Education } from './components/Education'
import { Zoo } from './components/Zoo'
import { Booking } from './components/Booking'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Loyalty } from './components/Loyalty'
import { Book } from './components/Book'
import { ItemCart } from './components/ItemCart'
import { Payment } from './components/Payment'
import { Signupbooking } from './components/Signupbooking'
import { Loginbooking } from './components/Loginbooking'
import { Userdash } from './components/Userdash'
import { Bookingdetails } from './components/Bookingdetails'
import { Order } from './components/Order'
import { Staff } from './components/Staff'
import { Staffingbooking } from './components/Staffingbooking'
import { Eductioninfo } from './components/Eductioninfo'
import { Policy } from './components/Policy'

function App() {
  return (
    <BrowserRouter>
      <div className="App ">

        {/* This is the navbar that i got from bootstrap */}
        <Navbar expand="lg" className="Navbar">
          <Container fluid>
            <Navbar.Brand href="#" className='logo'>RZA</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                // style={{ maxHeight: '100px' }}
                navbarNavDropdown
              >
                {/* The links to difrent pages that are diplayed on navbar  */}
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/hotles">Hotel</Nav.Link>
                <Nav.Link as={Link} to="/education">Education</Nav.Link>
                <Nav.Link as={Link} to="/zoo">Zoo</Nav.Link>
                <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/staff">Staff</Nav.Link>
                <Nav.Link as={Link} to="/policy">Policy</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            {/* The Route allow user to change between pages  */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hotles" element={<Hotles />} />
            <Route path="/education" element={<Education />} />
            <Route path="/zoo" element={<Zoo />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/loyalty" element={<Loyalty />} />
            <Route path="/Book" element={<Book />} />
            <Route path="/itemCart" element={<ItemCart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/loginbooking" element={<Loginbooking />} />
            <Route path="/signupbooking" element={<Signupbooking />} />
            <Route path="/userdash" element={<Userdash />} />
            <Route path="/bookingdetails" element={<Bookingdetails />} />
            <Route path="/order" element={<Order />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/staffingbooking" element={<Staffingbooking />} />
            <Route path="/eductioninfo" element={<Eductioninfo />} />
            <Route path="/policy" element={<Policy />} />
            
            
          </Routes>
        </div>
        <CookieConst debug={true}>This site uses Cookies to enhance your browsing experience</CookieConst>
      </div>
    </BrowserRouter>
  );
}

export default App;




