import React from 'react';

const MyItem = ({item,handleDelete}) => {
    const {name,img,description,price,_id,quantity,Supplier_name}=item;
    return (
        <div className='item'>
            <img className='w-100 item-img' src={img} alt='' />
            <h2>{name}</h2>
            <h5>Supplier: {Supplier_name}</h5>
            <h5>Quantity:{quantity}</h5>
            <p ><small>{description}</small></p>
            <h4>Price: ${price}</h4>
            <button onClick={()=>handleDelete(item._id)} className="'btn btn-danger text-light'" >Delete</button>
        </div>
    );
};

export default MyItem;