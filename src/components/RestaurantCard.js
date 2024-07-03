import {Img_CDN} from "../utils/constant"

const RestaurantCard =(props)=>{
    const {resData} = props;

    const {name,cloudinaryImageId, cuisines, costForTwo, avgRating, sla} = resData.info

    return (
        <div className='res-card'>
           <img className='card-image' src={`${Img_CDN}/${cloudinaryImageId}`} /> 
           <h3 className='rest-name'>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h3>{costForTwo}</h3>
           <h5>{avgRating} ⭐</h5>
           <p>{sla.deliveryTime} minutes</p>
        </div>
    )
}

export default RestaurantCard;