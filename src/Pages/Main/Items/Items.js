import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items, setitems] = useState([])

    useEffect(() => {
        fetch('https://intense-citadel-86628.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setitems(data));
    }, [])
    return (
        <div id='items'>
            <h2 className='text-center mt-5 item-title'>Items</h2>
            <div id='items' className='container'>
                <div className='row'>
                    <div className='items-container'>
                        {
                            items.slice(0,6).map(item => <Item
                                key={item._id}
                                item={item}
                            ></Item>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;