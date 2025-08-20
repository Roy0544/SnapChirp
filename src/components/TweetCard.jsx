import React, { useEffect, useRef, useState } from 'react';
import uploadservice from '../appwrite/file';
import service from '../appwrite/data';
import authservice from '../appwrite/auth';
import user from '../assets/user.png'

export default function TweetCard({ name, content, image,postId,userId, initialLikesCount,time}) {

  const [imgUrl, setimgUrl] = useState("")
 
  const [liked, setliked] = useState(false)
  const [loading, setloading] = useState(false)
    const [likesCount, setLikesCount] = useState(initialLikesCount || 0);
     const [initialized, setInitialized] = useState(false);
    const isMountedRef = useRef(true);
const date = new Date(time);
const time12h = date.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true
});
  useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);


  useEffect(() => {
        const checkLike = async () => {
            if (userId && postId && !initialized) {
                try {
                    const result = await service.checkIfLiked(postId, userId);
                    if (isMountedRef.current) {
                        setliked(result.isLiked);
                        setLikesCount(result.likeCount);
                        setInitialized(true);
                    }
                } catch (error) {
                    console.error('Error checking like status:', error);
                    if (isMountedRef.current) {
                        setInitialized(true);
                    }
                }
            }
        };
        checkLike();
    }, [postId, userId, initialized]);
    const handleLike = async () => {

       
        setloading(true);
        
        if (liked) {
            // Unlike the post
            const success = await service.unlikePost(postId, userId);
            if (success) {
                setliked(false);
                setLikesCount(success);
            }
        } else {
            // Like the post
            const success = await service.likePost(postId, userId);
            if (success) {
                setliked(true);
                setLikesCount(success);
            }
        }
        
        setloading(false);
    };


//

  useEffect(() => {
    const getimage=(image)=>{
  const images=  uploadservice.getFilePreview(image)
  
  setimgUrl(images)
  
    }
    getimage(image)
  }, [])

  return (
    <article className=" shadow-[0_6px_20px_-4px_rgba(0,0,0,0.2)] max-w-xl w-full border-b border-neutral-200 bg-white hover:bg-neutral-50 transition-colors cursor-pointer">
      <div className="p-4 flex gap-3">
        {/* Avatar */}
        <img
          src={user}
          alt="Jane Smith"
          className="h-10 w-10 rounded-full object-cover"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header: Name, handle, timestamp */}
          <div className="flex items-center gap-1 text-sm">
            <span className="font-bold text-neutral-900 hover:underline cursor-pointer">{name}</span>
            <span className="text-neutral-500">@{name}</span>
            <span className="text-neutral-400">·</span>
            <time className="text-neutral-500 hover:underline cursor-pointer" dateTime="2025-08-17">{time12h}</time>
          </div>

          {/* Tweet text */}
          <div className="mt-1 text-[15px] leading-5 text-neutral-900">
           {content}
           
          </div>
          {/* image section */}

          <div>
            <img src={imgUrl} alt="" />
          </div>

          {/* Actions */}
          <div className="mt-3 flex items-center justify-between max-w-md text-neutral-500">
           
            {/* Like */}
            <button onClick={handleLike}    disabled={loading || !initialized} className={`  group flex items-center gap-1 rounded-full p-2 hover:bg-rose-50 transition-colors ${liked 
                                    ? 'bg-red-100 text-red-600 border-red-300' 
                                    : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-red-100'}`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-rose-600 cursor-pointer">
                <g>
                  <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.030-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" fill="currentColor"></path>
                </g>
              </svg>
              <span className="text-xs group-hover:text-rose-600">  {loading ? "..." : likesCount}</span>
            </button>

           
          </div>
        </div>

       
      </div>
    </article>
  );
}
