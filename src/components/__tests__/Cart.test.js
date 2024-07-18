import { fireEvent, render } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from '../RestaurantMenu'
import MOCK_DATA from '../mocks/mockResMenu.json';
import appStore from "../../utils/appStore"
import Header from "../Header";
import Cart from "../Cart"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=> Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
        
    })
)

it("Should load Restaurant Menu Component", async()=>{

    await act(async()=>render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>));

    const accordianHeader = screen.getByText("Newly Added (4)")

    fireEvent.click(accordianHeader);
 const foodItems = screen.getAllByTestId("foodItems")

    expect(foodItems.length).toBe(4)

    const addBtns = screen.getAllByRole("button", {name: "Add +"})
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument()

    console.log(addBtns.length)

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()

    fireEvent.click(addBtns[2]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument()

    expect(foodItems.length).toBe(6) // 4 from accordian itemList and to 2 on cart list have same itemlist
    
    fireEvent.click(screen.getAllByRole("button", {name: "Remove Cart"}));

    expect(foodItems.length).toBe(4)


    expect(screen.getByText("Cart is empty Add Items to the cart!")).toBeInTheDocument()
})