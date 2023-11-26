import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; 
import { Helmet } from 'react-helmet';   
import { AuthContext } from '../../Providers/AuthProviders';
  

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors },} = useForm();
    const { creatUser } = useContext(AuthContext);

    const onSubmit = (data) =>{ 
        console.log(data)
        creatUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

    // console.log(watch("name"))

    return (

        <>
           <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name")} name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { min: 6, max: 15 })} name='password' placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="Sign UP" />
        </div>
      </form>
      <p className='ml-8 mb-8'><small>Already have a acount? <Link to='/login'>Please Login</Link> </small></p>
    </div>
  </div>
</div>
        </>
        
    );
};

export default SignUp;

