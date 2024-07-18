import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Search res list for the text burger", async()=>{
    
   await act(async ()=>
     render(<BrowserRouter>
                <Body/>
            </BrowserRouter>));


const cardBeforeSearch =  screen.getAllByTestId("resCard")
expect(cardBeforeSearch.length).toBe(20)

 const searchBtn = screen.getByRole("button", {name: "Search"})

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target:{value:"burger"}});
    
    fireEvent.click(searchBtn)

    // screen should res card
   const cards =  screen.getAllByTestId("resCard")

   expect(cards.length).toBe(0); 
});


it("Should filter top Rated restaurant", async()=>{
    
    await act(async ()=>
      render(<BrowserRouter>
                 <Body/>
             </BrowserRouter>));
 
 
 const cardBeforeFilter =  screen.getAllByTestId("resCard")
 expect(cardBeforeFilter.length).toBe(20)
 
  const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"})
     
     
     fireEvent.click(topRatedBtn)
 
     // screen should res card
    const cards =  screen.getAllByTestId("resCard")
 
    expect(cards.length).toBe(8) 
 });