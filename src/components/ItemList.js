import React from 'react'

const ItemList = ({list}) => {
  return (
    <div>
        {list.map((item, index)=>(
            <div key={index}>
                <div>{item}</div>
            </div>
        ))
        }
    </div>
  )
}

export default ItemList