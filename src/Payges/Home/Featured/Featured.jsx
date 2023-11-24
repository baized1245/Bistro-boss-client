import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle heading="Featured Item" subHeading="Check It Out"></SectionTitle>
           <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-opacity-30 bg-slate-300 text-black'>
           <div>
                  <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p>November 24, 2023</p>
                <p className='uppercase'>Where can I get some?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ratione earum alias molestiae blanditiis, quas quidem explicabo magnam atque debitis consectetur modi ut architecto ipsum iure aut eos molestias, rerum nobis dolores aperiam? Quisquam iusto odio totam consectetur culpa eos, saepe sed eligendi similique, maiores fugit, quibusdam ea quis recusandae?</p>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;