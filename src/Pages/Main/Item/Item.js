
import React from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import './Item.css'
const Item = ({item}) => {
    const {name,img,description1,description2,description3,description4,price,_id,quantity,Supplier_name}=item;
    const navigate=useNavigate();
    const navigateToCheckOut= _id=>{
        navigate(`/inventory/${_id}`)
    }
    return (
        <div className='item'>
            <img className='w-100 item-img' src={img} alt='' />
            <h3>{name}</h3>
            <h6>Supplier: {Supplier_name}</h6>            
            <p ><small>{description1}</small></p>
            <p ><small>{description2}</small></p>
            <p ><small>{description3}</small></p>
            <p ><small>{description4}</small></p>
            <h6 className='quantity'>Quantity:{quantity}</h6>
            <div className='item-footer d-flex justify-content-between'>
            <h4 className='text-danger'>${price}</h4>
            <button onClick={()=>navigateToCheckOut(_id)} className='btn btn-info text-light'>Stock Update</button>
            </div>

        </div>
    );
};

export default Item;