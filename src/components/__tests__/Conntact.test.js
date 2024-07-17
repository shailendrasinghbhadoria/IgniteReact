import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"


describe("Contact Us Page Test Case", ()=>{
    test("Should load contact us component",()=>{
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    })

    test("Should load button inside Contact component",()=>{
        render(<Contact/>)
        const button = screen.getByText("Submit") 
        expect(button).toBeInTheDocument();
    })

    test("Should load input inside Contact component",()=>{
        render(<Contact/>)
        const input = screen.getByPlaceholderText("Name")
        
        expect(input).toBeInTheDocument();
    })

    test("Should load 2 input inside Contact component",()=>{  // on test keyword we can also writeit
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox")

        // console.log(inputBoxes.length)
        expect(inputBoxes.length).not.toBe(3);
    })
})

    