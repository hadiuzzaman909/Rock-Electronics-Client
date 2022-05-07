import React from 'react';
import { Link } from 'react-router-dom';
import './Stock.css'
const Stock = () => {
    return (
        <div>
            <p>This is Stock room</p>
            <Link to="/manageInventory"><button className='manage-inventories'>Manage Inventories</button></Link>

        </div>
    );
};

export default Stock;
