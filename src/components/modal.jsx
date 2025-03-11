import React, { Children, useState } from "react";
import "../styles/components/modal.css"
import "../styles/index.css"


const Modal =({ isOpen, onClose, children }) => {
    if(!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                <header className="modal">
                    <div>
                    </div>
                    <div className="modal-close">
                    <button className="null" onClick={onClose}>
                        &#10799;
                    </button>
                    </div>
                    
                </header>
                {children}
            </div>
        </div>
    );
};

export default Modal;