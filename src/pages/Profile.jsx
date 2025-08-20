import React, { useEffect, useState } from 'react';
import login from '../store/authSlice'
import back from '../assets/back.jpeg'
import {  useSelector } from 'react-redux';
import EditProfileForm from '../components/EditProfileForm';
import service from '../appwrite/data';
import authservice from '../appwrite/auth';
import TweetCard from '../components/TweetCard';
import user from '../assets/user.png'

const UserProfilePage = () => {


  const [userval, setuserval] = useState([])
  const [userID, setuserID] = useState("")
  const [document, setdocument] = useState(null)
  const [userpost, setuserpost] = useState([])
 


 useEffect(() => {
   const getuser=async()=>{
     const userdata= await service.getposts()
     setuserval(userdata.documents)
   
     
    }
    getuser()
   
   
   
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
    if (userval.length >0 && userID) {
     
      
      const matchedDoc = userval.find(doc => doc.userId === userID);
    
      if (matchedDoc) {
        
        setdocument(matchedDoc);
      }
    }
  }, [userval, userID]);

 useEffect(() => {
        const getUserPosts = async () => {
            if (userID) {
                try {
                  
                    const posts = await service.getPostsByUserId(userID);
                    
                    setuserpost(posts.documents || []);
                  
                } catch (error) {
                
                } finally {
                }
            }
        };
        getUserPosts();
    }, [userID]);

   
    
    
  
const [isupdate, setisupdate] = useState(false)

    const updatehandler=()=>{
        setisupdate(!isupdate)
    }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        {/* Cover Photo & Profile Header */}
        <div className="bg-white border border-neutral-200 rounded-b-lg overflow-hidden">
          {/* Cover Photo */}
          <div className="relative h-48 sm:h-64 bg-gradient-to-r from-sky-400 to-blue-500">
            <img
              src={back}
              alt="Cover"
              className="w-full h-full object-cover"
            />
         
          </div>

          {/* Profile Info */}
          <div className="relative px-4 pb-4">
            {/* Profile Picture */}
            <div className="relative -mt-16 mb-4">
              <div className="relative inline-block">
                <img
                  src={user}
                  alt={document ? document.username:"image"}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-2 right-2 p-1.5 bg-neutral-900 rounded-full text-white hover:bg-neutral-800 transition-colors  ">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2">
             
                <button onClick={updatehandler} className="px-6 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors font-bold">
                 { isupdate? "Exit":"Edit Profile"}
                </button>



             
              </div>
            </div>
            <div>
                {isupdate? <EditProfileForm id={userID} isupdate={isupdate} setisupdate={setisupdate} />:null}

            </div>

            {/* User Info */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-neutral-900">{ document? document.username:''}</h1>
                  <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                  </svg>
                </div>
                <p className="text-neutral-500">@{document? document.username:''}</p>
              </div>

              <p className="text-neutral-900 text-[15px] leading-6">
               {document? document.bio:''}
              </p>

              {/* Profile Details */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{document? document.location:''}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <a href="#" className="text-sky-600 hover:underline">{ document? document.links:""}</a>
                </div>
                
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h4a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                  </svg>
                  <span>{ document? document.$createdAt.slice(0,10):""}</span>
                </div>
              </div>

              {/* Following/Followers */}
              <div className="flex items-center gap-6 text-sm">
              
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-l border-r border-neutral-200 sticky top-0 z-10">
          <nav className="flex border-b border-neutral-200">
            <button className="flex-1 px-4 py-4 text-center font-medium text-neutral-900 border-b-2 border-sky-600 bg-sky-50/50">
              Posts
            </button>
         
          </nav>
        </div>

        {/* Posts Feed */}
        <div className="bg-white border-l border-r border-b border-neutral-200 rounded-b-lg">
         
          <article className="border-b border-neutral-100 bg-neutral-50/50">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-neutral-500 text-sm">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>Pinned Post</span>
              </div>
              
           
 {userpost.map((post)=>(

          <TweetCard key={post.$id} name={post.username} content={post.content} image={post.featuredImage} initialLikesCount={post.likescount} userId={post.userId} postId={post.slug} time={post.$createdAt}/>
          ))}


            </div>
          </article>

         

          {/* Load More */}
          <div className="p-6 text-center">
            <button className="text-sky-600 hover:underline font-medium">
              Load more posts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
