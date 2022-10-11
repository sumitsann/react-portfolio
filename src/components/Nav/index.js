import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const [categories] = useState([
    {
      name: "portfolio",
      description:
        "Portfolio of web development projects studied in the Bootcamp.",
    },
    { name: "resume", description: "Resume of Sumit Ojha" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Sumit Ojha
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
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
