import React from 'react'
import NavBar from '../components/NavBar';

const Contacts = () => {
    return (
        <>
            <NavBar />
            <div className="hp-cont">
                <h1>Contattaci</h1>
                <p>Non prepere il pulsante sotto, se no mi tocca lavorare.</p>
                <div className='d-flex'>
                    <button className='cont-but' href="#">Inviaci una Mail</button>
                    <button className='cont-but' href="#">Chiamaci su Whatsapp</button>
                </div>
            </div>
        </>
    )
}

export default Contacts
