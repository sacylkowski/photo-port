import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

// Gallery component will require a prop of currentCategory
// rendering the component into the DOM and return a utility function
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe("Gallery is rendering", () => {
    it("renders", () => {
        render(<Gallery currentCategory={portrait} />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />)
        expect(asFragment()).toMatchSnapshot()
    });

    it("renders", () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />)
        expect(getByTestId("h1tag")).toHaveTextContent("Portraits")
    })
})