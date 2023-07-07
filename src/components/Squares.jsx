import React from 'react';
import './Squares.css';
import iconArrow from '../assests/images/icon_arrow.png';
const Squares=(props)=>{

    return(
        <>
        
        <div className='a' style={{ backgroundColor: props.color, ...props.styles }}>
        <h3>{props.heading}</h3>
        <p>{props.para}</p>
        <button ><img src={iconArrow} alt="arrow icon" /></button>
        </div>     
        </>

    )
}

export default Squares;