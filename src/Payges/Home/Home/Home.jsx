import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;