import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import saladImg from '../../../assets/home/chef-service.jpg'

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                subHeading="Should Try"
                 heading="CHEF RECOMMENDS"
                ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={saladImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Ceaser Salad</h2>
                    <p>Lettuce, Eggs, Permesan Cheese, Chicken Breast Fillest.</p>
                    <div className="card-actions">
                    <button className="btn btn-outline">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={saladImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Ceaser Salad</h2>
                    <p>Lettuce, Eggs, Permesan Cheese, Chicken Breast Fillest.</p>
                    <div className="card-actions">
                    <button className="btn btn-outline">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={saladImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Ceaser Salad</h2>
                    <p>Lettuce, Eggs, Permesan Cheese, Chicken Breast Fillest.</p>
                    <div className="card-actions">
                    <button className="btn btn-outline">ADD TO CART</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ChefRecommends;