import React, { useEffect, useState } from 'react';
import MyItem from './MyItem';
import './MyItems.css';
const MyItems = () => {
    const [items, setitems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/myItems')
            .then(res => res.json())
            .then(data => setitems(data));
    }, [])
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure?');
        if(proceed){
            const url=`http://localhost:5000/myItems/${id}`;
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
            <h2 className='text-center mt-2 mb-3 item-title'>My Selected Items</h2>
            <div className='container'>
                <div className='row'>
                    <div className='items-container-myItems'>
                        {
                            items.map(item => <MyItem
                                key={item._id}
                                item={item}
                                handleDelete={handleDelete}
                            ></MyItem>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItems;