import {Img_CDN} from "../utils/constant"

const RestaurantCard =(props)=>{
    const {resData} = props;

    const {name,cloudinaryImageId, cuisines, costForTwo, avgRating, sla} = resData.info

    return (
        <div className='m-2 p-2 w-[250] bg-slate-200 rounded-md hover:bg-slate-300'>
           <img className='card-image' src={`${Img_CDN}/${cloudinaryImageId}`} /> 
           <h3 className='font-bold py-2'>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h3>{costForTwo}</h3>
           <h5>{avgRating} ⭐</h5>
           <p>{sla.deliveryTime} minutes</p>
        </div>
    )
}

// Higher Order Component

//input  -  ResaurantCard ==> ResaurantCardPromoted

export const withPromptedLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
           
        )
    }
}

export default RestaurantCard;