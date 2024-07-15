import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

    const dispatch = useDispatch()
    const cartItem = useSelector((store)=>store.cart.items)
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

  return (
    <div className='text-center m-10 w-6/12 m-auto'>
       <h1 className='font-bold'>Cart</h1>
       <button className='p-2 m-2 bg-black text-white rounded-lg'
         onClick={handleClearCart}>
            Remove Cart</button>
        {cartItem.length===0 && <h1>Cart is empty Add Items to the cart!</h1>}
       <div className='bg-gray-200'>        
        <ItemList list={cartItem}/>
       </div>
    </div>
  )
}

export default Cart