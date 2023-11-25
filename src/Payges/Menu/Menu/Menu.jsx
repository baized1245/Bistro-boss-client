import React from 'react';
import { Helmet } from 'react-helmet'
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/dessert-bg.jpeg'


const Menu = () => {
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>

        </div>
    );
};

export default Menu;