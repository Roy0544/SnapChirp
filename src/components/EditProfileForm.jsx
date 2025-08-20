import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import service from '../appwrite/data';
import { login } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import authservice from '../appwrite/auth';
import user from '../assets/user.png'
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
       
        setdocuments(posts.documents)
        
        
      


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

  
  
  useEffect(() => {
  if (documents.length > 0 && userID) {
    const matchedDoc = documents.find(doc => doc.userId === userID);
    if (matchedDoc) {
      setdocumentId(matchedDoc.slug);
    }
  }
}, [documents, userID]);


  

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
        links:data.website,
        bio:data.bio
       
      }

      const updateddata= await service.updateProfile(updated)
      setupdata(updateddata)
      dispatch(login(updateddata))
      

     
      
      
      alert('Profile updated successfully!');
      
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  }; 



  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
       
       
        {/* Name Fields */}
        <div className="grid  gap-6 ">
          
         
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
