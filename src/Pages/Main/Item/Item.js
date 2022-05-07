
import React from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import './Item.css'
const Item = ({item}) => {
    const {name,img,description,price,_id,quantity,Supplier_name}=item;
    const navigate=useNavigate();
    const navigateToCheckOut= _id=>{
        navigate(`/inventory/${_id}`)
    }
    return (
        <div className='item'>
            <img className='w-100 item-img' src={img} alt='' />
            <h2>{name}</h2>
            <h5>Supplier: {Supplier_name}</h5>
            <h5>Quantity:{quantity}</h5>
            <p ><small>{description}</small></p>
            <div className='item-footer d-flex justify-content-between'>
            <h4 className='text-danger'>${price}</h4>
            <button onClick={()=>navigateToCheckOut(_id)} className='btn btn-info text-light'>Stock Update</button>
            </div>

        </div>
    );
};

export default Item;