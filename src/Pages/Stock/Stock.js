import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Stock.css';
const Stock = () => {
    const { _id } = useParams();
    const [item, setItem] = useState({});
    const [reload, setReload] = useState(true);
    // const [stock, setStock] = useState({});
    // const {quantity } = item;
    useEffect(() => {
        const url = `https://intense-citadel-86628.herokuapp.com/items/${_id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [reload])
    const handleUpdateQuantity = event => {
        event.preventDefault();
        const proceed = window.confirm('Are you sure?');
        const newQuantity = parseInt(event.target.quantity.value);
        console.log(newQuantity);
        if (proceed) {
            const url = `https://intense-citadel-86628.herokuapp.com/items/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity)
            })
                .then(res => res.json())
                .then(result => {
                    setReload(!reload);
                    setItem(result);
                    console.log(result);
                })

        }

    }

    //for deliver button
    const handleDelivered = () => {
        const updateQuantity = parseInt(item.quantity) - 1;
        const url = `https://intense-citadel-86628.herokuapp.com/items/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateQuantity), 
        })
            .then((res) => res.json())
            .then((data) => {
                setReload(!reload);
                setItem(data);
                console.log(data);
            });
    };
    return (
        <div>
            <div className='stock d-flex  flex-sm-row flex-md-row '>
                <img className='stock-img ' src={item.img} alt=''></img>
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
                    <form className='d-flex justify-content-between mt-3 form' onSubmit={handleUpdateQuantity}>
                        <input className='mb-3 input-quantity' type='number' name='quantity' placeholder='    restock the items' required />
                        <input className='ReStoke mx-auto  bg-primary' type="submit" value='Restoke' />

                    </form>
                    {/* <form className='d-flex justify-content-between mt-3 form' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-3 input-quantity' placeholder='    restock the items' type="text" name='number' {...register("quantity")} />
                        <input className='ReStoke mx-auto  bg-primary' type="submit" value='Restoke' />
                    </form> */}
                    <button onClick={handleDelivered} className='stock-btn mt-3 name-deliver'>Delivered</button>
                </div>

            </div>
            <Link to="/manageInventory"><button className='manage-inv'>Manage Inventories</button></Link>
        </div>
    );
};

export default Stock;
