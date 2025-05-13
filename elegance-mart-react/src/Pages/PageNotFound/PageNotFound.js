import React from 'react';
import pageNotFound from '../../Images/page-not-found.jpg'
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        <div className='text-center mt-5'>
        <img className='image-page' src={pageNotFound} alt='' />
        </div>
    );
};

export default PageNotFound;