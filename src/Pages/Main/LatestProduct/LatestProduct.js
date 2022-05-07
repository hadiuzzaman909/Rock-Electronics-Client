import React from 'react';

const LatestProduct = ({latest_product}) => {
    const {name,img,description,price,id}=latest_product;
    return (
        <div className='service'>
            <img className='w-75 service-img' src={img} alt='' />
            <h2>{name}</h2>
            <p ><small>{description}</small></p>
            <h4>Price: ${price}</h4>
        </div>
    );
};

export default LatestProduct;