import React, { useEffect, useState } from 'react';
import Branch from '../Branch/Branch';
import './Branches.css'
const Branches = () => {
    const [branches, setBranches] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/marketPlace')
            .then(res => res.json())
            .then(data => setBranches(data));
    }, [])
    return (
        <div id='branches'>
            <h2 className='text-center mt-5 branches-title'>Our Marketplace</h2>
            <div id='branches' className='container'>
                <div className='row'>
                    <div className='branches-container'>
                        {
                            branches.map(branch => <Branch
                                key={branch.id}
                                branch={branch}
                            ></Branch>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Branches;