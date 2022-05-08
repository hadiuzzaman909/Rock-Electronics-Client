import React from 'react';
import './MyItem.css'
const MyItem = ({item,handleDelete}) => {
    const {name,img,description1,description2,description3,description4,price,_id,quantity,Supplier_name}=item;
    return (
        <div className='item'>
            <img className='w-75 myItem-img ' src={img} alt='' />
            <h2>{name}</h2>
            <h5>Brand: {Supplier_name}</h5>
            <h4>Price: ${price}</h4>
            <button onClick={()=>handleDelete(item._id)} className="btn btn-danger text-light myItem-delete" >Cancel</button>
        </div>
    );
};

export default MyItem;