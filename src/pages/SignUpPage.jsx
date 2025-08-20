import React from 'react';
import { useForm } from 'react-hook-form';
import authservice from '../appwrite/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';


export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate()
const dispatch=useDispatch()
  const onSubmit = async  (data) => {

    try {
      const account=await authservice.createAccount(data)

      
      if(account){
        const userdata=await authservice.getCurrentUser()
   
        
        dispatch(login(userdata))

      }
      navigate('/home')
      dispatch(login())

      
    } catch (error) {
      console.log(error.message, error.code)
      
      
    }
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-neutral-200">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Create your account</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium text-neutral-700">Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${errors.name ? 'border-red-500' : 'border-neutral-300'}`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Username */}
        {/* <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-medium text-neutral-700">Username</label>
          <input
            id="username"
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 3, message: 'Minimum 3 characters' },
              maxLength: { value: 20, message: 'Maximum 20 characters' },
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${errors.username ? 'border-red-500' : 'border-neutral-300'}`}
            placeholder="Choose a username"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
        </div> */}

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium text-neutral-700">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
                message: 'Invalid email address',
              },
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${errors.email ? 'border-red-500' : 'border-neutral-300'}`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium text-neutral-700">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Minimum 6 characters' },
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${errors.password ? 'border-red-500' : 'border-neutral-300'}`}
            placeholder="Create a password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

       

        <button
          type="submit"
          className="w-full bg-sky-600 text-white font-bold py-3 rounded-lg hover:bg-sky-700 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
