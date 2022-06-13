import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
    // renders About test
  
    // First Test
    // use the it function, in the first arguement a string declares what is being tested
    // in the second argument a callback function runs the test
    it("renders", () => {
        render(<About />);
    });

    // Second Test
    // comparing snapshot versions of the DOM node structure
    // 
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})