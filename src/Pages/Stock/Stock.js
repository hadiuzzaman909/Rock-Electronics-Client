import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Stock.css';
import { useForm } from "react-hook-form";
const Stock = () => {
    const { register, handleSubmit } = useForm();
    const { _id } = useParams();
    const [item, setitem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${_id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setitem(data))
    }, [])



    return (
        <div>
            <div className='stock d-flex  flex-column flex-md-row '>
                <img className='stock-img w-50' src={item.img} alt=''></img>
                <h4 className='name-stock'>{item.name}</h4>
                <h4 className='text-danger name-price'>Price: ${item.price}</h4>
                <div className='description'>
                    <div className='all1'>
                        <div className='d-flex justify-content-between'>
                            <h5 className='all'>Product-Id:</h5>
                            <h5 className='all'>{item.newId}</h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h5 className='all sup'>Supplier:</h5>
                            <h5 className='all sup'>{item.Supplier_name}</h5>
                        </div>


                        <div className='d-flex justify-content-between'>
                            <h5 className='all lastmonth'>Sold in Last Month:</h5>
                            <h5 className='all lastmonth'>{item.lastMonthSold}</h5>
                        </div>
                        <div className='d-flex justify-content-between quan'>
                            <h5 className=' '>Quantity: </h5>
                            <h5 className=' '>{item.quantity}</h5>
                        </div>
                    </div>
                    <div className='features mt-2'>
                        <h5 className='fet'>Features</h5>
                        <div className='d-flex align-items-center justify-content-center '>
                            <div style={{ height: '1.5px' }} className='bg-secondary w-25 text-center '></div>
                            <p className=' px-2'></p>
                            <div style={{ height: '1.5px' }} className='bg-secondary w-25 text-center '></div>
                        </div>
                        <p>{item.description1}</p>
                        <p>{item.description2}</p>
                        <p>{item.description3}</p>
                        <p>{item.description4}</p>
                    </div>
 
                    <button className='stock-btn mt-3 name-deliver'>Delivered</button>
                </div>

            </div>
            <Link to="/manageInventory"><button className='manage-inventories'>Manage Inventories</button></Link>
        </div>
    );
};

export default Stock;
