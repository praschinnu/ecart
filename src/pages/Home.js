import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Heart, ShoppingCart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishList } from '../redux/wishlistSlice';
import { fetchProuducts } from '../redux/productsSlice';




function Home() {

  const dispatch=useDispatch()

 const {allProducts,loading,error}=useSelector((state)=>state.productsSlice)
  

  useEffect(() => {
    dispatch(fetchProuducts())
  }, [])
  

  return (
    <div>
      <Row className='p-2'>
       

          
      
        <Col lg={6}>
          <img
            className='w-100'
            src="https://i.postimg.cc/wjSRkLqp/jean1.jpg"
            style={{ height: '500px' }}
            alt="" />
        </Col>


        <Col lg={6}>
          <div className='p-5 mt-5'>
            <p><b className='fs-4'>J</b>eans are one of the most versatile and popular clothing items in the world.
              They can be worn for casual, formal, or even athletic occasions.
              Whether you are looking for a pair of jeans that fit you perfectly,
              or you want to explore the latest trends and styles, you have come to the right place.
              At Jeans Ecommerce, we offer a wide range of jeans for men, women, and kids.
              You can browse through our categories, such as slim fit, straight leg, bootcut, flare, or ripped jeans, and find the one that suits your taste and preference.
              You can also filter your search by color, size, price, brand, or customer rating.
              We have jeans from some of the most renowned brands in the world, such as Levi’s, Wrangler, Calvin Klein, Diesel, and more.
              You can also check out our new arrivals and best sellers sections to see what’s hot and happening in the world of jeans. No matter what kind of jeans you are looking for, you can be sure to find them at Jeans Ecommerce. We offer free shipping on all orders above ₹5000, and easy returns and exchanges within 30 days.
              So what are you waiting for? Shop now and get ready to rock your jeans!</p>
          </div>
        </Col>
      </Row>


      <Row className='p-5 mt-4'>

        {
          loading &&
          <div className='text-center p-5 '>
            <i class="fa-solid fa-spinner fa-spin-pulse fa-5x"></i>

          </div>
        }


      {


          allProducts.length>0 && allProducts.map(i=>(

        <Col className='p-3 mt-4' lg={2}>
          <Card style={{ width: '200px',height:'450px' }}>
            <Card.Img variant="top"
            style={{height:'200px'}}
              src={i.image} />
            <Card.Body>
              <Card.Title> <h4>{i.title.length>30?i.title.slice(0,30)+"..":i.title}</h4></Card.Title>
              <Card.Text>
              <h5>{i.price}</h5>
               <h4> rating{i.rating.rate}</h4>
                
              </Card.Text>
              <Button onClick={()=>dispatch(addToCart(i))} variant="light">
                <ShoppingCart ></ShoppingCart></Button>

              <Button onClick={()=>dispatch(addToWishList(i))} variant="light" className='ms-3'>
                <Heart></Heart></Button>

            </Card.Body>
          </Card>

        </Col>
        ))

        
      }
      </Row>    <br />
      <br /><br />
    </div>

  )
}

export default Home