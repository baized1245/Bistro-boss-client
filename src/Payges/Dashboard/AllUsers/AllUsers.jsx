import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json();  
        },
      });

      const handleMakeAdmin = id => {
        
      }

      const handleDelete = user => {

      }

    return (
        <div className='w-full ml-8'>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className='text-semibold text-3xl my-4'>Total Users: {users.length}</h3>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => <tr
        key={user._id}
        >
        <th>{index + 1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{ user?.role === 'admin' ? 'admin' : <button onClick={() =>handleMakeAdmin(user?._id)} className="btn text-white bg-orange-500"><FaUserShield></FaUserShield></button> }</td>
        <td><button onClick={() =>handleDelete(user)} className="btn text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button></td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;