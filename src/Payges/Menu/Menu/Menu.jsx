import React from 'react';
import { Helmet } from 'react-helmet'
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/dessert-bg.jpeg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [ menu ] = useMenu();
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* Main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/*menu items */}

            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            ></MenuCategory>

            <MenuCategory
            items={dessert}
            title="dessert"
            img={dessertImg}
            ></MenuCategory>

            <MenuCategory
            items={soup}
            title="soup"
            img={soupImg}
            ></MenuCategory>

            <MenuCategory
            items={salad}
            title="salad"
            img={saladImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;