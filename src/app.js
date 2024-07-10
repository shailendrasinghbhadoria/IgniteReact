import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
//import Grocery from './components/Grocery';



const Grocery = lazy(()=>import('./components/Grocery')) //Lazzy Loading/ Code Spliting/ Chunking/ Dynamic Bundling/on demand loading
const AppLoyout = ()=>{


    //authentication

    const [userName, setUserName] = useState("")

    useEffect(()=>{
        //making api call for user authentication
        const data = {
            name : "Shailendra Singh"
        }
        setUserName(data.name)
    },[])


    return(
        
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <div className='app'>
                <Header/>                      
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
   {
    path: "/",
    element:<AppLoyout/>,
    children:[        
    {
        path: "/",
        element:<Body/>,
    },
    {
        path: "/about",
        element:<About/>,
    },
    {
        path: "/contact",
        element:<Contact/>,
    },
    {
        path:"/restaurants/:resid",
        element:<RestaurantMenu/>,
    },
    {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
    },
    ],
    errorElement: <Error/>,
   },   
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);