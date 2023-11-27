import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from "react-icons/fa";
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart, refetch] = useCart();
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">

    <Outlet></Outlet>

    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full text-base-content bg-[#D1A054]">

      {/* Sidebar content here */}

      <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
      <li><NavLink to='/'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
      <li><NavLink to='/'><FaWallet></FaWallet> Payment History</NavLink></li>
      <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
      <span className="badge badge-secondary">+{cart?.length || 0}</span>
       </NavLink>
      </li>

      <div className='divider'></div>
      
      <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
      <li> <NavLink to='/menu'>Our Menu</NavLink> </li>
    <li> <NavLink to='/order/salad'>Order Food</NavLink> </li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;

         