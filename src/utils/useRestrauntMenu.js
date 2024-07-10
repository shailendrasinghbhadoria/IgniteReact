import { useEffect, useState } from "react";
import { RestMenuApi } from "./constant";

const  useRestrauntMenu = (resid)=>{

    const [resInfo, setResInfo] = useState(null)
    const resInfoDumy = {
            name:"Hotel Empire",
            cuisines:['North Indian', 'Kebabs'],
            costForTwo: "Rs 450 for two",
            cards:[                         //menuItems
            {
                type: "type.google.ItemCategory",
               category:"Recommended",
               menuItems:['Lemon-Rice','Handi Chikken','Chikken-Corma','Paneer-Lababda']
            },
            {
                type: "type.google.ItemCategory",
                category:"Newly Added",
                menuItems:['Paneer Tikka','Paneer Tadka','Chikken-Corma','Fish']
             },
             {
                type: "type.google.ItemCategory",
                category:"Todays",
                menuItems:['Paneer Tikka','Sew Bhaji','Chikken-Corma','Chiken']
             },
             {
                type: "type.google.ItemCategory",
                category:"Combo - PAck",
                menuItems:['Paneer Tikka','Sew Bhaji','Chikken-Corma','Chiken']
             },
             {
                type: "type.google",
                category:"No-veg",
                menuItems:['Chikken-Corma','Chiken']
             },             
                    
                
            ],
            
        }

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData= async()=>{
        const res = await fetch(RestMenuApi+resid)    
        const json = await res.json()
        setResInfo(resInfoDumy) // set dummy data because api does not have data
    }

    return resInfo;

}


export default useRestrauntMenu;