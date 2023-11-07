import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className=''>
              <Row className='mt-2 p-2 bg-black'>
        <Col lg={3} md={6} sm={12} xs={12}>
        <b> ITZYY</b>
          <i>
            <p>  Designed and build with all the love in the world by the bootsrap team. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod at placeat id consequuntur autem?</p>
          </i>

        </Col>
        <Col>
          <u>Links</u><br />
          <a style={{ textDecoration: 'none', color: 'blue' }} href="">Landing Page</a><br />
          <a style={{ textDecoration: 'none', color: 'blue' }} href="">Home</a><br />
          <a style={{ textDecoration: 'none', color: 'blue' }} href="">Watch History</a><br />

        </Col>
        <Col>
          <p>Guides</p>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Routing</p>

        </Col>
        <Col>
          <b className='text-primary'>Contact Us</b>
<input type="text" className='form-control-primary w-75 ' placeholder='enter email' />
          <button className='btn btn-dark mt-2 w-75'>send</button> <br />
          <i class="fa-brands fa-instagram text-white fa-2x mt-3 ms-3" ></i>
          <i class="fa-brands fa-facebook text-white fa-2x mt-3 ms-4" ></i>
          <i class="fa-brands fa-twitter text-white fa-2x mt-3 ms-4" ></i>
          <i class="fa-brands fa-github text-white fa-2x mt-3 ms-4" ></i>
        </Col>
      </Row>
    </div>
  )
}

export default Footer