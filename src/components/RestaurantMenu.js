import React, { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import {RestMenuApi} from "../utils/constant"
import RestCategory from './RestCategory';

const RestaurantMenu = () => {

    const {resid} = useParams()
    
    //console.log(resid);   

    const resInfo = useRestrauntMenu(resid) // custom hook
    
    //const [showItem, setShowItem] = useState(false)
    const [showIndex, setShowIndex] = useState(0)

    if(resInfo===null) return <Shimmer/>;
    
    const {name, cuisines, costForTwo, cards} = resInfo 
    const categories = cards.filter((category)=>category.type==="type.google.ItemCategory")

    const updateActiveIndex =(newIndex)=>{
        // updated - opening and closing same accordion functionality.
        if(newIndex===showIndex){
            setShowIndex(null);
        }else{
            setShowIndex(newIndex)
        }

    }

   
           
     return   (
            <div className='text-center my-10'>
                <h1 className='font-bold pb-4'>{name}</h1>
                <p>{cuisines.join(', ')} - {costForTwo}</p>                
                    <ul>
                        {categories.map((items, index)=>(
                           <RestCategory menu={items} 
                            showItem={index === showIndex?true:false} 
                            setShowIndex={()=>updateActiveIndex(index)}
                            />
                        ))

                        }
                        
                    </ul>

            </div>
        )
   
}

export default RestaurantMenu