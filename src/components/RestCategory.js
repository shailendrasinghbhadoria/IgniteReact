import React, {useState} from 'react'
import ItemList from './ItemList'

const RestCategory = ({menu, showItem, setShowIndex}) => {

 const itemList = menu?.menuItems;
 
 const handClick=()=>{    
    setShowIndex()   
  
 }

  return (
    <div>
        <div className='w-6/12 bg-gray-200 mx-auto shadow-lg my-4 p-4 scroll-smooth'>        
            <div className='flex justify-between cursor-pointer' onClick={handClick}>
                <span>{menu.category} ({itemList.length})</span>
                <span>🔽</span>
            </div>
           
            { showItem && <ItemList list={itemList}/>}
            
        </div>
        
    </div>
  )
}

export default RestCategory