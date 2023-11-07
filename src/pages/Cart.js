import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { clearCart, removeCart } from '../redux/cartSlice';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



function Cart() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }


  const cartArray = useSelector(state => state.cart)
  console.log(cartArray);

  if
    (cartArray.length != 0) {
    var total = cartArray.map(i => i.price).reduce((a, b) => a + b)
  }
  else {
    var total = 0
  }
  const handleShow = () => setShow(true);

  const handlePay = () => {
    dispatch(clearCart())
    setShow(false);
  }

  return (
    <div>
      <h1 className='text-center p-4' style={{ color: 'blue' }}>cart product</h1>
      {
        cartArray.length > 0 ? (


          <Table striped bordered hover className='containter p-5'>

            <thead>
              <tr>
                <th>#</th>
                <th>product title</th>
                <th>price</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
            {
              cartArray.map((i, index) => (

                <tr>
                  <td>{index + 1}</td>
                  <td>{i.title}</td>
                  <td>{i.price}</td>

                  <td>
                    <img src={i.image} style={{ height: '100px' }} alt="" />
                  </td>
                  <td className='text-center'>
                    <Button onClick={() => dispatch(removeCart(i.id))}>
                      <i class="fa-solid fa-trash text-info"></i>

                    </Button>
                  </td>
                </tr>
              ))
            }
          </Table>
        ) : <h1>cart is empty</h1>
      }
      <div className='text-end p-5'>
        <h4>cart total {total} Rs</h4>

      </div >

      <div className='text-center p-5'>
        <Button className='btn btn-info p-2' onClick={handleShow}>checkout</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pay to continue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="phone number"
                className="mb-3"
              >
                <Form.Control type="phone number" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingupi" label="upi id">
                <Form.Control type="text" placeholder="enter upi" />
              </FloatingLabel>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button varient="secondary" onClick={handleClose} >
              cancel
            </Button>
            <Button varient="primary" onClick={handlePay} >
              pay
            </Button>
          </Modal.Footer>


        </Modal>

      </div>
    </div>
  )
}

export default Cart