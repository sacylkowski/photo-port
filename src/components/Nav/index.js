import React from "react";

const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  function categorySelected() {
    console.log(`clicked`)
  }

function Nav() {
    return (
    <header>
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
                <li>
                    <span>Contact</span>
                </li>
                {/* whenever you map over anything in JSX, the outermost element must have a key attribute */}
                {categories.map((category) => (
                    <li
                    className="mx-1"
                    key={category.name}
                    >
                        <span onClick={() => categorySelected(category.name)} >
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    );
  }


  export default Nav;