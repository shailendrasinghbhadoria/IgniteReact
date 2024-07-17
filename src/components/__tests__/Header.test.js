import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import {fireEvent, render, screen } from "@testing-library/dom";
import "@testing-library/jest-dom"

it("Should load Header Component with a login button",()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                    <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name:"Login"});  //priorities always try to getByRole not getByText 
    // and have multiple button and especially find any button then use 2nd parameter {name: "Login"}

    //const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument();

})

it("Should load Header Component with a Cart items 0",()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                    <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart - (0 items)");  

    expect(cartItems).toBeInTheDocument();

})

it("Should load Header Component with a Cart items",()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                    <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);  

    expect(cartItems).toBeInTheDocument();

})


it("Should change Login Button to Logout on cLick",()=>{

     render(
            <BrowserRouter>
                <Provider store={appStore}>
                        <Header/>
                </Provider>
            </BrowserRouter>        )
    
        const loginButton = screen.getByRole("button", {name:"Login"});

        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button", {name:"Logout"});
    
        expect(logoutButton).toBeInTheDocument();
    
})