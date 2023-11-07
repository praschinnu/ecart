import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { searchProduct } from '../redux/productsSlice';




function Header() {

  const cartArray = useSelector(state => state.cart)

const dispatch=useDispatch()


  return (
    <div>
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar.Brand href="#home" className='text-white'>
              <img
                src="https://i.postimg.cc/hjcHHNP0/ecommerce-removebg-preview.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />{''}

              <b style={{ color: 'blue' }}>Mecalaux</b>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: 'blue' }} href="#home">Home</Nav.Link>
              <Nav.Link style={{ color: 'blue' }} href="#link">Link</Nav.Link>

        <Form.Control className='ms-5'
        
         type="text" placeholder="search product" 
         onChange={(e)=>dispatch(searchProduct(e.target.value))} />
     

            </Nav>
            <Nav className="mr-auto">
              <Link to={'/cart'} style={{ textDecoration: 'none' }} className='text-white'>
                <Nav.Link className='text-white' href="#home"><i class="fa-solid fa-cart-shopping">

                </i>
                  {cartArray.length}

                </Nav.Link>
              </Link>

              <Link to={'/wishlist'} style={{ textDecoration: 'none' }}>
                <Nav.Link className='text-white' href="#link"><i class="fa-regular fa-heart"></i>


                </Nav.Link>
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header