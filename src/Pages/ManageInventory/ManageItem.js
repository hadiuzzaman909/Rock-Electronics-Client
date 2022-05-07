import React from 'react';
import './ManageItem.css';
const ManageItem = ({item,handleDelete}) => {
    const {name,img,price,quantity}=item;

    return (
        <div className='review-item mx-auto'>
            <div>
                <img className='manage-img' src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name"> {name}
                    </p>
                    <p className="product-name-quantity"> Quantity:{quantity}
                    </p>
                </div>
                <div >
                    <button onClick={()=>handleDelete(item._id)} className="delete-button " >Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;