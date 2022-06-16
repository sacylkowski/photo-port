import React, { useState } from "react";
import Modal from "../Modal";


function PhotoList({ category }) {
    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    // making sure that the correct photos are showing when the category is selected.
    // going through each photo in the photos array, to find every photo that matches the category that the user selects
    // it's then returned in an array and assigned to currentPhotos
    const currentPhotos = photos.filter((photo) => photo.category === category);
    const [currentPhoto, setCurrentPhoto] = useState();

    // set the modal to false so it doesn't open until we want it to
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(true);
    }


    return (
        <div>
           {isModalOpen && <Modal currentPhoto={currentPhoto} />}
            <div className="flex-row">
                {/* map the currentPhotos array to render each photo that matches the category */}
                {currentPhotos.map((image, i) => (
                    // src was assigned the require expression.  This isn't common practice.
                    // default property is where the image has been saved.  To render the image, the default property must be invoked
                    <img src={require(`../../assets/small/${category}/${i}.jpg`)}
                    // alt attribute is used for accessibilty user-assistance devices
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        // key attribute was also assigned the image's name. This attribute value must be a unique string
                        key={image.name} />
                ))}
            </div>
        </div>
    );
}

export default PhotoList;