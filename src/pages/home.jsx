import "../styles/pages/home.css"
import "../styles/components/button.css"
import React, { useState } from "react"
import Modal from "../components/modal"
import "../styles/components/modal.css"


export default function Home(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
            <div id="page">
                <h1 id="title">
                     FORMULÁRIO GSDPQ
                </h1>
                <div className="container"> 
                    <div>
                    <button className="adicao" onClick={()=> setIsModalOpen(true)}>&#65291;</button>
                   
                    </div>
                </div>
                <Modal isOpen={isModalOpen} onClose={()=> setIsModalOpen(false)}>
                        <h2>Conteúdo do Modal</h2>
                        <p>Este é um modal exemplo.</p>
                    </Modal>
            </div>
    );
}
    