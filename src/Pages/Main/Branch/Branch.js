import React from 'react';

const Branch = ({branch}) => {
    const {name,img,description}=branch;
    return (
        <div className='service'>
            <img className='w-100 service-img' src={img} alt='' />
            <h2>{name}</h2>
            <p ><small>{description}</small></p>
        </div>
    );
};

export default Branch;