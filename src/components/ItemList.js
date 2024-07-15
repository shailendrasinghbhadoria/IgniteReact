import React from 'react';
import {Img_CDN} from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({list}) => {

  const dispatch = useDispatch()

  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  }

  return (
    <div>
        {list.map((item, index)=>(
            <div key={index} className='border border-b-[#f2f2f2]'>
                <div className='flex justify-between items-center'>
                  <p className=''>{item.disItem}</p>                  
                  <div className='relative'>
                  <img className='w-24' src={`${Img_CDN}/${item.img}`}/>
                  <button className='bg-black text-white p-1 rounded-lg absolute left-0 top-0'
                  onClick={()=>handleAddItem(item)}>
                    Add +</button>
                  </div>
                  
                </div>
            </div>
        ))
        }
    </div>
  )
}

export default ItemList