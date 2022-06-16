import React from "react";

function Modal({ onClose, currentPhoto}) {

    const {name, category, description, index} = currentPhoto;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                {/* adding the event listener attribute to each img element */}
                <img 
                src={require(`../../assets/large/${category}/${index}.jpg`)}
                alt="current category" />
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;