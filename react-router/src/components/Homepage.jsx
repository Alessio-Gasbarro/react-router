import React from 'react'
import NavBar from './NavBar';

const Homepage = () => {
    return (
        <>
            <NavBar />
            <div className="hp-cont">
                <h1>HomePage</h1>
                <p>Benvenuto nel nostro umile negozio! Scopri i nostri prodotti e trova ciò che fa per te.</p>
            </div>
        </>
    )
}

export default Homepage
