import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageInventory.css';
import ManageItem from './ManageItem';

const ManageInventory = () => {
    const [items, setitems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setitems(data));
    }, [])
    return (
        <div id='items-manage-inventory'>
            <h2 className='text-center mt-2 mb-3 item-title'>All Inventory Items</h2>

            <div className='container'>
                <div className='row'>
                    <div className='items-container-manage-inventory'>
                        {
                            items.map(item => <ManageItem
                                key={item._id}
                                item={item}
                            ></ManageItem>)
                        }
                    </div>
                </div>
            </div>
            <Link to="/addNew"><button className='manage-inventories'>Add New Items</button></Link>
        </div>
    );
};

export default ManageInventory;