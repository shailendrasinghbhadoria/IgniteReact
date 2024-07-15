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
               menuItems:[
                    {
                    disItem: 'Lemon-Rice',
                    price: 120,
                    img: '6e04be27387483a7c00444f8e8241108'
                    },
                    {
                    disItem: 'Handi Chikken',
                    price: 150,
                    img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                    },
                    {
                    disItem: 'Chikken-Corma',
                    price: 160,
                    img: '6e04be27387483a7c00444f8e8241108'
                    },
                    {
                    disItem: 'Paneer-Lababda',
                    price: 200,
                    img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                    }
                ]
            },
            {
                type: "type.google.ItemCategory",
                category:"Newly Added",
                menuItems:[
                        {
                        disItem: 'Lemon-Rice',
                        price: 120,
                        img: '6e04be27387483a7c00444f8e8241108'
                        },
                        {
                        disItem: 'Handi Chikken',
                        price: 150,
                        img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                        },
                        {
                        disItem: 'Chikken-Corma',
                        price: 160,
                        img: '6e04be27387483a7c00444f8e8241108'
                        },
                        {
                        disItem: 'Paneer-Lababda',
                        price: 200,
                        img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                        }
                    ]
             },
             {
                type: "type.google.ItemCategory",
                category:"Todays",
                menuItems:[
                    {
                        disItem: 'Lemon-Rice',
                        price: 120,
                        img: '6e04be27387483a7c00444f8e8241108'
                        },
                        {
                        disItem: 'Handi Chikken',
                        price: 150,
                        img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                        },
                        {
                        disItem: 'Chikken-Corma',
                        price: 160,
                        img: '6e04be27387483a7c00444f8e8241108'
                        },
                        {
                        disItem: 'Paneer-Lababda',
                        price: 200,
                        img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                        }
                ]
             },
             {
                type: "type.google.ItemCategory",
                category:"Combo - PAck",
                menuItems:[
                    {
                        disItem: 'Lemon-Rice',
                        price: 120,
                        img: '6e04be27387483a7c00444f8e8241108'
                        },
                        {
                        disItem: 'Handi Chikken',
                        price: 150,
                        img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                        },
                        {
                        disItem: 'Chikken-Corma',
                        price: 160,
                        img: '6e04be27387483a7c00444f8e8241108'
                        },
                        {
                        disItem: 'Paneer-Lababda',
                        price: 200,
                        img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                        }
                ]
             },
             {
                type: "type.google",
                category:"No-veg",
                menuItems:[
                    {
                        disItem: 'Lemon-Rice',
                        price: 120,
                        img: '6e04be27387483a7c00444f8e8241108'
                        },
                        {
                        disItem: 'Handi Chikken',
                        price: 150,
                        img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                        },
                        {
                        disItem: 'Chikken-Corma',
                        price: 160,
                        img: '6e04be27387483a7c00444f8e8241108'
                        },
                        {
                        disItem: 'Paneer-Lababda',
                        price: 200,
                        img: '2b4f62d606d1b2bfba9ba9e5386fabb7'
                        }
                ]
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