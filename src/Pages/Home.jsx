import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Store/Slice/HomeSlice'
import { Button } from '@mui/material'
import { addToCart, removeFromCart } from '../Store/Slice/CartSlice'


const Home = () => {
  const dispatch = useDispatch()
  const { data, status } = useSelector((state) => state.api)
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(fetchProducts())
  },[])

  const add = (item) => {
    dispatch(addToCart(item))
    console.log(item)
  }
  const remove = (item) => {
    dispatch(removeFromCart(item))

  }

  return (
    <div>
      <>
        {/* <h3 className='heading_style'>Shopping Store</h3> */}

        <div  className="container">
            <h3 style={{textAlign:'center'}}>{status}</h3>
          <div className="row">
            {
              data.map((item) => {
                return (
                  <>
                    <div className="col-md-3 mb-4">
                      <div className="cards">
                        <div className="card" style={{height:'23rem', width:'12rem', padding:'20px',backgroundColor:'#fcf3e6'}} key={item.id}>
                          <img src={item.image} alt="" className='card_image card-image-top'></img>
                          <div className="card-info" style={{textAlign:"center"}}>
                            <div className='title'><p>{item.title}</p></div>
                            <div className='price'>₹ {item.price}</div>
                            <div className='rating'>{item.rating.rate}
                             {[...Array(Math.floor(item.rating.rate))].map(() =>
                             {
                              return(
                                <span>⭐</span>
                               )
                             }
                           )}
                            </div>
                            <div className='button'>
                              {cart.some(data => data.id === item.id) ?
                                <Button variant="contained" onClick={() => remove(item.id)} style={{backgroundColor:'#f50505'}}>Remove</Button> :
                                <Button variant="contained" onClick={() => add(item)} style={{backgroundColor:'#14ed11'}}>Add To Cart</Button>
                              }
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </>
                )
              })
            }
          </div>
        </div>
      </>
    </div>
  )
}

export default Home
