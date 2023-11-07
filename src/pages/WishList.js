import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishList } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';



function WishList() {
    //accesss data from store
    const wishListArray = useSelector(state => state.wishList)

const dispatch=useDispatch()

const handleAddCart=(product)=>{
    //add to cart
    dispatch(addToCart(product))
    //remove wishlist
    dispatch(removeWishList(product.id))
}


    return (

        <div>
            {
                wishListArray?.length > 0 ?

                    <div className='text-center text-info w-75 container my-5'>
                        <h1 className='mb-5'>List of product in your wishlist</h1>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product title</th>
                                    <th>Price</th>
                                    <th>image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wishListArray.map((i, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{i.title}</td>
                                            <td>{i.price}</td>
                                            <td>
                                                <img style={{ height: '100px' }} src={i.image} alt="" />
                                            </td>
                                            <Button onClick={()=>dispatch(removeWishList(i.id))} className='btn btn-info'>
                                                <i class="fa-solid fa-trash text-info mt-2"></i>
                                            </Button>

                                            <Button onClick={()=>handleAddCart(i)} className='ms-2 '>
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </Button>

                                        </tr>

                                    ))
                                }


                            </tbody>
                        </Table>
                    </div> : <h1>wishlist is empty</h1>
            }
        </div>
    )
}

export default WishList