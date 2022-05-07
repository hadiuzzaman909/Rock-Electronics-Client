import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Main/Banner/Banner';
import Branches from '../Main/Branches/Branches';
import Items from '../Main/Items/Items';
import Latest from '../Main/Latest/Latest';
import Footer from '../Shared/Footer/Footer';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Link to="/manageInventory"><button className='manage-inventories'>Manage Inventories</button></Link>
            <Latest></Latest>
            <Branches></Branches>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;