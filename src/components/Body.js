import React, {useState,useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import resObj from '../utils/mockData';
import Shimmer from './Shimmer';


const Body =()=>{

    const [restList, setRestList] = useState([])
    const [searchList, setSearchList] = useState([])
    const [searchText, setSearchText] = useState("")


    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        const res = await data.json()
        setRestList(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchList(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 

    if(restList.length===0){
        return<Shimmer/>
    }

    return(
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className='search-btn' onClick={()=>{

                        const search = restList.filter((list)=> list.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setSearchList(search)                        

                    }}>Search</button>
                </div>
                <button className='filter-btn' onClick={()=>{
                    let newList = restList.filter((res)=>{                        
                      return res.info.avgRating>4;                     
                   });
                   setRestList(newList)
                }
                }
                >Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {   searchList.map((item, index)=>(                    
                    <RestaurantCard key={index}
                     resData={item}/>                    
                ))
                }               
                
            </div>
        </div>
    )
}

export default Body;