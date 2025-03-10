import React, { Children } from "react";
import "../styles/components/modal.css"


const Modal =({ isOpen, onClose, children }) => {
    if(!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <h1>X</h1>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;