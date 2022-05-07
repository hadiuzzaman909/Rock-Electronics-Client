import React from 'react';
import './Branch.css'
const Branch = ({branch}) => {
    const {name,img,description}=branch;
    return (
        <div className='service'>
            <img className='w-100 branch-img' src={img} alt='' />
            <h3>{name}</h3>
            <p ><small>{description}</small></p>
        </div>
    );
};

export default Branch;