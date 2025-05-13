import React from 'react';
import './LatestProduct.css'
const LatestProduct = ({latest_product}) => {
    const {name,img,description,price,id}=latest_product;
    return (
        <div className='services-container'>
            <img className=' service-img-latest mx-auto ' src={img} alt='' />
            <h2 className='text-center'>{name}</h2>
            <h5 className='text-center'>Price: ${price}</h5>
            <p className='text-center' ><small>{description}</small></p>
            <button className='button-latest'>More Specification</button>
            
        </div>
    );
};

export default LatestProduct;