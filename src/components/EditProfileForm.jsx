import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import service from '../appwrite/data';
import { login } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import authservice from '../appwrite/auth';

// import { ID } from 'appwrite';

const EditProfileForm = ({isupdate,setisupdate,id}) => {

    const [updata, setupdata] = useState(null)
    const [documentId, setdocumentId] = useState("")
    const [userID, setuserID] = useState("")
    const [documents, setdocuments] = useState([])
    const dispatch=useDispatch()

      useEffect(() => {
    const getposts = async () => {
      try {
        const posts = await service.getposts();
        // console.log('Full response:', posts);
        setdocuments(posts.documents)
        // console.log('Documents:', posts.documents);
        // setdocumentId(posts.documents[0].slug)
        // Save the documents array to state, not the full response
        // setpostdata(posts.documents);
        
      


      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    };

    getposts();
  }, [])

  useEffect(() => {
    const getuserid=async()=>{
        const id=await authservice.getCurrentUser().then((userdata)=>{
            if(userdata){
                setuserID(userdata.$id)
            }
        }
        )
    }
    getuserid()
  }, [])

  
  console.log(userID);
  console.log(documents);
  
  useEffect(() => {
  if (documents.length > 0 && userID) {
    const matchedDoc = documents.find(doc => doc.userId === userID);
    if (matchedDoc) {
      setdocumentId(matchedDoc.slug);
    }
  }
}, [documents, userID]);
console.log(documentId);

  

    // const matchuser=documents.filter((document)=>document.userId===userID)

    // console.log("matched userid is",matchuser[0]?.slug)
    // setdocumentId(matchuser[0]?.slug)


  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset,
    setValue,
    watch
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      bio: '',
      website: '',
      location: '',
      phone: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      console.log('Form Data:', data);
      setisupdate(!isupdate)
      const updated={
        slug:String(documentId),
        userId:id,
        username:data.username,
        phonenumber:Number(data.phone),
        location:data.location,
        profilepic:data.profilePicture[0],
        links:data.website,
        bio:data.bio
      }

      const updateddata= await service.updateProfile(updated)
      setupdata(updateddata)
      dispatch(login(updateddata))
      

     
      
      
      // Simulate API call
    //   await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Handle successful submission
      alert('Profile updated successfully!');
      
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  }; 

console.log(updata);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Profile Picture Section */}
        <div className="flex items-center space-x-6">
          <div className="shrink-0">
            <img 
              className="h-16 w-16 object-cover rounded-full" 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" 
              alt="Current profile photo" 
            />
          </div>
          <label className="block">
            <span className="sr-only text-black">Choose profile photo</span>
            <input 
              type="file" 
              
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              {...register('profilePicture')}
            />
          </label>
        </div>

        {/* Name Fields */}
        <div className="grid  gap-6 ">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
               Name
            </label>
            <input
              type="text"
              id="firstName"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('firstName', {
                required: 'First name is required',
                minLength: { value: 2, message: 'First name must be at least 2 characters' }
              })}
              placeholder="John"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          {/* <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('lastName', {
                required: 'Last name is required',
                minLength: { value: 2, message: 'Last name must be at least 2 characters' }
              })}
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div> */}
        </div>

        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.username ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 3, message: 'Username must be at least 3 characters' },
              pattern: { value: /^[a-zA-Z0-9_]+$/, message: 'Username can only contain letters, numbers, and underscores' }
            })}
            placeholder="johndoe123"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('phone', {
              pattern: {
                value: /^(\+91[-\s]?|91[-\s]?|0)?[6-9]\d{9}$/,
                message: 'Invalid phone number'
              }
            })}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('location')}
            placeholder="New York, NY"
          />
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700">
            Website
          </label>
          <input
            type="url"
            id="website"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.website ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('website', {
              pattern: {
                value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                message: 'Invalid website URL'
              }
            })}
            placeholder="https://johndoe.com"
          />
          {errors.website && (
            <p className="mt-1 text-sm text-red-600">{errors.website.message}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            id="bio"
            rows="4"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.bio ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('bio', {
              maxLength: { value: 500, message: 'Bio must be less than 500 characters' }
            })}
            placeholder="Tell us about yourself..."
          />
          <p className="mt-1 text-sm text-gray-500">
            {watch('bio')?.length || 0}/500 characters
          </p>
          {errors.bio && (
            <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
