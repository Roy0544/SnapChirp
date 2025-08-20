import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import authservice from '../appwrite/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';


export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
const dispatch=useDispatch()
  const onSubmit = async (data) => {

  
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const session = await authservice.login(data);
      console.log('Login successful:', session);

    if(session){
        const userData = await authservice.getCurrentUser();
        console.log(userData);
         // Get actual user data
         dispatch(login(userData)); 
    }
      
      
      
      // Navigate to dashboard/home after successful login
      navigate('/home');

    } catch (error) {
      console.log('Login error:',error.code, error.message, );
     
      
      // Show user-friendly error messages
      if (error.code === 401) {
        setErrorMessage('Invalid email or password.');
      } else if (error.code === 429) {
        setErrorMessage('Too many login attempts. Please try again later.');
      } else if (error.code === 400) {
        setErrorMessage('Please check your email and password.');
      } else {
        setErrorMessage('Login failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-neutral-200">
        {/* Header */}
        <div className="mb-8 text-center">
          <svg className="mx-auto w-10 h-10 text-sky-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46,6C21.78,6.34 21.06,6.58 20.31,6.68C21.11,6.19 21.72,5.43 22,4.5C21.26,4.95 20.46,5.26 19.62,5.41C18.91,4.65 17.92,4.19 16.81,4.19C14.67,4.19 12.92,5.94 12.92,8.08C12.92,8.39 12.96,8.69 13.03,8.98C9.48,8.8 6.33,7.11 4.14,4.58C3.79,5.21 3.59,5.94 3.59,6.72C3.59,8.12 4.31,9.36 5.38,10.08C4.71,10.06 4.09,9.88 3.55,9.61V9.67C3.55,11.66 4.96,13.31 6.84,13.69C6.5,13.78 6.14,13.82 5.78,13.82C5.52,13.82 5.27,13.8 5.03,13.75C5.55,15.39 7.02,16.55 8.79,16.58C7.38,17.71 5.56,18.42 3.58,18.42C3.26,18.42 2.95,18.4 2.64,18.36C4.42,19.55 6.56,20.21 8.87,20.21C16.8,20.21 20.46,13.68 20.46,8.53C20.46,8.33 20.46,8.13 20.45,7.93C21.25,7.38 21.92,6.73 22.46,6Z"/>
          </svg>
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">Welcome back</h1>
          <p className="text-neutral-600 text-sm">Sign in to your account</p>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${errors.email ? 'border-red-500' : 'border-neutral-300'}`}
              placeholder="you@example.com"
              disabled={isLoading}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
              })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${errors.password ? 'border-red-500' : 'border-neutral-300'}`}
              placeholder="Enter your password"
              disabled={isLoading}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

        

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-sky-600 text-white font-bold rounded-lg text-base transition-colors hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-neutral-200"></div>
          <span className="mx-3 text-neutral-400 text-xs">OR</span>
          <div className="flex-1 h-px bg-neutral-200"></div>
        </div>

       

        {/* Sign Up Link */}
        <p className="mt-6 text-sm text-neutral-600 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-sky-600 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
