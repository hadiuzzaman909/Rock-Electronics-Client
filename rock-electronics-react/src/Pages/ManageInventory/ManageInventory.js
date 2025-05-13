import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageInventory.css';
import ManageItem from './ManageItem';

const ManageInventory = () => {
    const [items, setitems] = useState([])

    useEffect(() => {
        fetch('https://intense-citadel-86628.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setitems(data));
    }, [])
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure?');
        if(proceed){
            const url=`https://intense-citadel-86628.herokuapp.com/items/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining=items.filter(item=>item._id !== id);
                setitems(remaining);
            })
        }
    }


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
                                handleDelete={handleDelete}
                            ></ManageItem>)
                        }
                    </div>
                </div>
            </div>
            <Link to="/addNew"><button className='manage-inventories mt-5'>Add New Items</button></Link>
        </div>
    );
};

export default ManageInventory;