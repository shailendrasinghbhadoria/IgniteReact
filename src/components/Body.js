import React, {useState,useEffect, useContext} from 'react';
import RestaurantCard, {withPromptedLabel} from './RestaurantCard';
import resObj from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus' 
import UserContext from '../utils/UserContext';

const Body =()=>{

    const [restList, setRestList] = useState([])
    const [searchList, setSearchList] = useState([])
    const [searchText, setSearchText] = useState("")

    const RestaurantCardPromoted = withPromptedLabel(RestaurantCard)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        const res = await data.json()
        setRestList(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchList(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 

    const {loggedInUser, setUserName} = useContext(UserContext)

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false) return <h1>Looks like you're offline, Please check your Internet connection</h1>

    if(restList.length===0){
        return<Shimmer/>
    }

    return(
        <div className='body'>
            <div className='flex mb-4'>
                <div className='search'>
                    <input type='text' data-testid="searchInput"  className='mx-2 border-black border-2 rounded-sm' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className='bg-blue-200 p-2 rounded-md' onClick={()=>{

                        const search = restList.filter((list)=> list.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setSearchList(search)                        

                    }}>Search</button>
                </div>
                <button className='bg-green-200 mx-2 p-2 rounded-md' onClick={()=>{
                    let newList = restList.filter((res)=>{                        
                      return res.info.avgRating > 4.4;                     
                   });
                   setSearchList(newList)
                }}
                >Top Rated Restaurants</button>

                <div className='mx-2'>
                    <label>UserName : </label>
                    <input className='border border-black p-1 rounded-sm' 
                    value={loggedInUser} 
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex flex-wrap'>
                {   searchList.map((item, index)=>(                    
                   <Link key={item.info.id} to={`/restaurants/${item.info.id}`}> 
                   {
                    item.info.promoted?
                    <RestaurantCardPromoted resData={item}/>:<RestaurantCard resData={item}/>
                   } 
                    </Link>                   
                ))
                }               
                
            </div>
        </div>
    )
}

export default Body;