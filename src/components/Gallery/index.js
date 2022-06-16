import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "../PhotoList";


function Gallery(props) {
     const { currentCategory } = props;
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p> 
        <PhotoList category={currentCategory.name} />
      </section>
    );
  }

  export default Gallery;