import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// const categories = [
//     {
//       name: "commercial",
//       description:
//         "Photos of grocery stores, food trucks, and other commercial projects",
//     },
//     { name: "portraits", description: "Portraits of people in my life" },
//     { name: "food", description: "Delicious delicacies" },
//     { name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature",
//     },
//   ];

function categorySelected() {
    console.log(`clicked`)
}

function Nav(props) {
    // initialing the category state as an array of a few objects
    // you can use the useState without a setter, but it offers no advantages over just creating a variable within the component
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    // the second arguement directs the hook to re-render the component on changes to the value of this state
    return (
        <header className="flex-row px-1">
            <h2>
                {/* the value of the data-testid attributes are link for the homepage and about for the about page */}
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {/* whenever you map over anything in JSX, the outermost element must have a key attribute */}
                    {/* short-circuit expression, currentCategory.name will be evaluted with category.name if that's true then navActive will be returned */}
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && "navActive"
                        }`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)}} >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}


export default Nav;