import React, { useEffect, useRef, useState } from 'react';
import authservice from '../appwrite/auth';
import { login } from '../store/authSlice';
import { useSelector } from 'react-redux';
import service from '../appwrite/data';

import { ID } from 'appwrite';
import uploadservice from '../appwrite/file';



const CreatePostPage = () => {

  const [udata, setudata] = useState({})
  const [loading, setLoading] = useState(false);
  const [inputval, setinputval] = useState("")
  // const [image, setimage] = useState(second)
  const [previewUrl, setpreviewUrl] = useState(null)
  const imageRef = useRef({});
  const [isreply, setisreply] = useState(true)


  const userdata = useSelector((state) => state.auth.userdata)


  useEffect(() => {
    console.log('User data from Redux:', userdata);
    if (userdata) {
      setudata(userdata);
    }
  }, []);


  // useEffect(() => {
  //   const getUserInfo = async () => {
  //     try {
  //       const userdata = await authservice.getCurrentUser();
  //       console.log(userdata);
  //       setudata(userdata); // ✅ Set the user data in state
  //     } catch (error) {
  //       console.error('Error fetching user:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getUserInfo();
  // }, []);




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
        console.log('file uploaded',uploadedFile);
       
        

        featuredImageId = uploadedFile.$id;
        const postData = {
          
          slug: String(ID.unique()), // Generate unique ID for the post
          content: inputval,
          featuredImage: featuredImageId,
          status: 'published',
          userId: udata.$id,
          username: udata.name,
          reply:String(isreply)

        };
        const newPost = await service.createPost(postData);
        if (newPost) {
          alert('Post created successfully!');

          // Reset form
          setinputval('');
          setpreviewUrl(null);
          imageRef.current = null;

          // Optionally navigate to the post or home
          // navigate('/home');
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
    console.log(e.target.value);
    setinputval(e.target.value)

  }
  const replycheck=()=>{
    setisreply(!isreply)
     console.log(isreply);
  }
  const imagehandler = (e) => {
    console.log(e.target.files);
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
      // Optionally keep the file too, e.g. setimage(file);
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
              {/* <button className="px-4 py-2 text-neutral-600 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors text-sm font-medium">
                Save Draft
              </button> */}
              <button onClick={posthandler} className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-bold">
                Post
              </button>
            </div>
          </div>

          {/* Audience Selector */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-neutral-600">Posting to:</span>
            <button className="flex items-center gap-1 px-3 py-1 border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors">
              <svg className="h-4 w-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sky-600 font-medium">Everyone</span>
              <svg className="h-3 w-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Compose Area - Left 2/3 */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://i.pravatar.cc/100?img=5"
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
                  {/* <div className="text-sm text-neutral-500">
                    <span className="text-neutral-700">0</span> / 280 characters
                  </div> */}
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
                    {/* <div className="relative bg-neutral-50 rounded-lg p-2 border">
      <video
        src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
        className="w-full h-32 object-cover rounded"
        controls
      />
      
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-neutral-600 truncate">video.mp4</span>
        <button className="text-red-500 hover:text-red-700 text-xs ml-1">
          ✕
        </button>
      </div>
    </div> */}

                    {/* Another Image */}
                    {/* <div className="relative bg-neutral-50 rounded-lg p-2 border">
      <img
        src="https://via.placeholder.com/150/0000FF"
        alt="image2.png"
        className="w-full h-32 object-cover rounded"
      />
      
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-neutral-600 truncate">image2.png</span>
        <button className="text-red-500 hover:text-red-700 text-xs ml-1">
          ✕
        </button>
      </div>
    </div> */}
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
                  {/* <button className="flex items-center gap-2 px-3 py-2 text-sky-600 hover:bg-sky-50 rounded-lg transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">Media</span>
                  </button> */}

                  {/* GIF Button */}
                  {/* <button className="flex items-center gap-2 px-3 py-2 text-sky-600 hover:bg-sky-50 rounded-lg transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h2a1 1 0 011 1v2h6a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h2z" />
                    </svg>
                    <span className="text-sm font-medium">GIF</span>
                  </button> */}

                  {/* Poll Button */}
                  {/* <button className="flex items-center gap-2 px-3 py-2 text-sky-600 hover:bg-sky-50 rounded-lg transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm font-medium">Poll</span>
                  </button> */}

                  {/* Emoji Button */}
                  {/* <button className="flex items-center gap-2 px-3 py-2 text-sky-600 hover:bg-sky-50 rounded-lg transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Emoji</span>
                  </button> */}

                  {/* Location Button */}
                  {/* <button className="flex items-center gap-2 px-3 py-2 text-sky-600 hover:bg-sky-50 rounded-lg transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">Location</span>
                  </button> */}
                </div>

                {/* <button className="px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed">
                  Post
                </button> */}
              </div>
            </div>

            {/* Poll Creation (Hidden by default) */}
            {/* <div className="bg-white border border-neutral-200 rounded-lg p-6 mt-4 hidden">
              <h3 className="font-bold text-neutral-900 mb-4">Create a Poll</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Choice 1"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
                <input
                  type="text"
                  placeholder="Choice 2"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
                <button className="text-sky-600 hover:underline text-sm font-medium">
                  + Add choice
                </button>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <select className="px-3 py-2 border border-neutral-300 rounded-lg text-sm">
                  <option>1 day</option>
                  <option>3 days</option>
                  <option>7 days</option>
                </select>
                <button className="text-neutral-600 hover:text-neutral-800 text-sm">
                  Remove poll
                </button>
              </div>
            </div> */}
          </div>

          {/* Right Sidebar - 1/3 */}
          <div className="space-y-6">
            {/* Post Settings */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">Post Settings</h2>

              <div className="space-y-4">
                {/* Schedule Post */}
                {/* <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-sky-600 border-neutral-300 rounded focus:ring-sky-500" />
                    <span className="text-sm text-neutral-700">Schedule for later</span>
                  </label>
                  <div className="mt-2 ml-7 hidden">
                    <input
                      type="datetime-local"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                </div> */}

                {/* Add to Thread */}
                {/* <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-sky-600 border-neutral-300 rounded focus:ring-sky-500" />
                    <span className="text-sm text-neutral-700">Add to thread</span>
                  </label>
                </div> */}

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

            {/* Trending Hashtags */}
            {/* <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">Trending Hashtags</h2>
              
              <div className="space-y-2">
                <button className="block w-full text-left px-3 py-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <span className="text-sky-600 font-medium">#ReactJS</span>
                  <p className="text-xs text-neutral-500">24.5K posts</p>
                </button>
                
                <button className="block w-full text-left px-3 py-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <span className="text-sky-600 font-medium">#WebDevelopment</span>
                  <p className="text-xs text-neutral-500">18.2K posts</p>
                </button>
                
                <button className="block w-full text-left px-3 py-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <span className="text-sky-600 font-medium">#UIDesign</span>
                  <p className="text-xs text-neutral-500">12.8K posts</p>
                </button>
                
                <button className="block w-full text-left px-3 py-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <span className="text-sky-600 font-medium">#StartupLife</span>
                  <p className="text-xs text-neutral-500">9.1K posts</p>
                </button>
              </div>
            </div> */}

            {/* Recent Drafts */}
            {/* <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">Recent Drafts</h2>
              
              <div className="space-y-3">
                <div className="p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors">
                  <p className="text-sm text-neutral-700 line-clamp-2">Working on some exciting new features for our platform...</p>
                  <p className="text-xs text-neutral-500 mt-1">Saved 2 hours ago</p>
                </div>
                
                <div className="p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors">
                  <p className="text-sm text-neutral-700 line-clamp-2">Just learned something amazing about React hooks...</p>
                  <p className="text-xs text-neutral-500 mt-1">Saved yesterday</p>
                </div>
              </div>

              <button className="w-full mt-3 text-sky-600 hover:underline text-sm font-medium">
                View all drafts
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
