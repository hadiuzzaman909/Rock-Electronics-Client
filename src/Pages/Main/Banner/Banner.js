import React from 'react';
import ee from '../../../Images/Web-Banner.jpg';
import ee2 from '../../../Images/ee2.jpg';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='banner'>
            <img className='image-banner' src={ee} alt='' />
            <img className='img-mobile' src={ee2} alt=''/>
            <h2 className='banner-text'>Rock Electronics WareHouse</h2>
            <h4 className='banner-text2'>We Provide the best brands electronic gadgets</h4>
            <Link to="/register"><button className='btn-banner'>Register Now</button></Link>
        </div>
    );
};

export default Banner;