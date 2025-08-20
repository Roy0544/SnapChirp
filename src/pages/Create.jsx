import React, { useEffect, useRef, useState } from 'react';
import authservice from '../appwrite/auth';
import { login } from '../store/authSlice';
import { useSelector } from 'react-redux';
import service from '../appwrite/data';
import user from '../assets/user.png'
import { ID } from 'appwrite';
import uploadservice from '../appwrite/file';



const CreatePostPage = () => {

  const [udata, setudata] = useState({})
  const [loading, setLoading] = useState(false);
  const [inputval, setinputval] = useState("")
 
  const [previewUrl, setpreviewUrl] = useState(null)
  const imageRef = useRef({});
  const [isreply, setisreply] = useState(true)


  const userdata = useSelector((state) => state.auth.userdata)


  useEffect(() => {
    // console.log('User data from Redux:', userdata);
    if (userdata) {
      setudata(userdata);
    }
  }, []);







  const posthandler = async () => {
    if (!inputval.trim()) {
      alert('Please enter some content!');
      return;
    }
    try {
      setLoading(true)
      let featuredImageId = null;
      if (setLoading) {
        const uploadedFile = await uploadservice.upLoadFile(imageRef.current.file);
        // console.log('file uploaded',uploadedFile);
       
        

        featuredImageId = uploadedFile.$id;
        const postData = {
          
          slug: String(ID.unique()), // Generate unique ID for the post
          content: inputval,
          featuredImage: featuredImageId,
          status: 'published',
          userId: udata.$id,
          username: udata.name,
          reply:String(isreply),
          likescount:0

        };
        const newPost = await service.createPost(postData);
        if (newPost) {
          alert('Post created successfully!');

          // Reset form
          setinputval('');
          setpreviewUrl(null);
          imageRef.current = null;

       
        }

      }
    } catch (error) {
      console.error('Error creating post:', error);

    }
    finally {
      setLoading(false)
    }


  }

  const inputhandler = (e) => {

    setinputval(e.target.value)

  }
  const replycheck=()=>{
    setisreply(!isreply)
   
  }
  const imagehandler = (e) => {
  
    const images = e.target.files[0]
    if (images && images.type.startsWith("image/")) {
      const url = URL.createObjectURL(images);
      setpreviewUrl(url);
      imageRef.current = {
        file: images,
        name: images.name,
        size: images.size,
        type: images.type,
        reply:true
      };
    
    } else {
      setpreviewUrl(null); // Not an image or reset
    }


  }
  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-neutral-900">Create Post</h1>
            <div className="flex items-center gap-3">
           
              <button onClick={posthandler} className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-bold">
                Post
              </button>
            </div>
          </div>


        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Compose Area - Left 2/3 */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user}
                  alt="Your avatar"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-neutral-900">{udata.name}</p>
                  <p className="text-sm text-neutral-500">@{udata.name}</p>
                </div>
              </div>

              {/* Compose Textarea */}
              <div className="mb-4">
                <textarea
                  placeholder="What's happening?"
                  onChange={inputhandler}
                  className="w-full p-4 text-xl placeholder-neutral-400 border border-neutral-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  rows="6"
                ></textarea>

                {/* Character Counter */}
                <div className="flex items-center justify-between mt-2">
                
                  <div className="w-8 h-8 relative">
                    <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
                      <circle
                        cx="16"
                        cy="16"
                        r="12"
                        stroke="rgb(229 231 235)"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="12"
                        stroke="rgb(14 165 233)"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={`${(0 / 280) * 75.4} 75.4`}
                        className="transition-all duration-300"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Media Upload Area */}
              {previewUrl && (

                <div className="mb-4">
                  {/* File Preview Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {/* Single File Preview Item */}
                    <div className="relative bg-neutral-50 rounded-lg p-2 border">
                      {/* Image Preview */}
                      <img
                        src={previewUrl}
                        alt={imageRef.current.name}
                        className="w-full h-32 object-cover rounded"
                      />

                      {/* File Info & Remove Button */}
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-neutral-600 truncate">{imageRef.current.name}</span>
                        <button className="text-red-500 hover:text-red-700 text-xs ml-1">
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* Video Preview Item */}
                    

                    
                  </div>
                </div>)}



              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-2">
                  {/* Media Button */}
                  <label className="px-6 py-2 bg-sky-600 text-white rounded-2xl text-sm font-semibold flex items-center gap-2 cursor-pointer hover:bg-sky-700 transition-colors ">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Browse Files
                    <input
                      onChange={imagehandler}
                      type="file"
                      className="hidden"
                      accept="image/png,image/jpg,image/jpeg,image/gif"
                    />
                  </label>
                 

                
                 
                </div>

               
              </div>
            </div>

            {/* Poll Creation (Hidden by default) */}
           
          </div>

          {/* Right Sidebar - 1/3 */}
          <div className="space-y-6">
            {/* Post Settings */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">Post Settings</h2>

              <div className="space-y-4">
               
               

                
               

                {/* Disable replies */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" onClick={replycheck} className="w-4 h-4 text-sky-600 border-neutral-300 rounded focus:ring-sky-500" />
                    <span className="text-sm text-neutral-700">Disable replies</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">Quick Tips</h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Use hashtags</p>
                    <p className="text-xs text-neutral-600">Include relevant hashtags to increase visibility</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Add media</p>
                    <p className="text-xs text-neutral-600">Posts with images get 2x more engagement</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Be authentic</p>
                    <p className="text-xs text-neutral-600">Share your genuine thoughts and experiences</p>
                  </div>
                </div>
              </div>
            </div>

           

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
