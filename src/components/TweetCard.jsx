import React, { useEffect, useState } from 'react';
import uploadservice from '../appwrite/file';

export default function TweetCard({ name, content, image}) {

  const [imgUrl, setimgUrl] = useState("")

  useEffect(() => {
    const getimage=(image)=>{
  const images=  uploadservice.getFilePreview(image)
  console.log(images);
  setimgUrl(images)
  
    }
    getimage(image)
  }, [])

  return (
    <article className=" shadow-[0_6px_20px_-4px_rgba(0,0,0,0.2)] max-w-xl w-full border-b border-neutral-200 bg-white hover:bg-neutral-50 transition-colors cursor-pointer">
      <div className="p-4 flex gap-3">
        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/100?img=5"
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
            <time className="text-neutral-500 hover:underline cursor-pointer" dateTime="2025-08-17">3h</time>
          </div>

          {/* Tweet text */}
          <div className="mt-1 text-[15px] leading-5 text-neutral-900">
           {content}
            <span className="text-sky-500 hover:underline cursor-pointer"> #DesignSystem</span>
            <span className="text-sky-500 hover:underline cursor-pointer"> #Frontend</span>
          </div>
          {/* image section */}

          <div>
            <img src={imgUrl} alt="" />
          </div>

          {/* Actions */}
          <div className="mt-3 flex items-center justify-between max-w-md text-neutral-500">
            {/* Reply */}
            <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-sky-50 transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-sky-600">
                <g>
                  <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c.683 0 1.237.54 1.237 1.206 0 .665-.554 1.206-1.237 1.206H9.756C6.931 4.412 4.75 6.558 4.75 9.25c0 2.685 2.181 4.832 4.005 4.832.671 0 1.215.54 1.215 1.206 0 .665-.544 1.206-1.215 1.206-3.621 0-6.004-2.917-6.004-6.494zm15.612 4.422c.756-.756 1.075-1.85.84-2.85-.204-.867-.915-1.582-1.798-1.797-1.016-.248-2.126.084-2.89.85l-4.758 4.773c-.532.533-.532 1.398 0 1.932.532.533 1.396.533 1.929 0L14.96 12.78c.532-.533 1.396-.533 1.929 0s.532 1.398 0 1.932l-4.758 4.773c-1.532 1.535-4.03 1.535-5.562 0s-1.533-4.032 0-5.566l4.758-4.773c1.532-1.535 4.03-1.535 5.562 0s1.533 4.032 0 5.566l-1.372 1.375c-.532.533-.532 1.398 0 1.932.532.533 1.396.533 1.929 0l1.371-1.375z" fill="currentColor"></path>
                </g>
              </svg>
              <span className="text-xs group-hover:text-sky-600">24</span>
            </button>

            {/* Retweet */}
            <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-emerald-50 transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-emerald-600">
                <g>
                  <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.791-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.791 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46L18.5 16.45V8c0-1.1-.896-2-2-2z" fill="currentColor"></path>
                </g>
              </svg>
              <span className="text-xs group-hover:text-emerald-600">12</span>
            </button>

            {/* Like */}
            <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-rose-50 transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-rose-600">
                <g>
                  <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.030-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" fill="currentColor"></path>
                </g>
              </svg>
              <span className="text-xs group-hover:text-rose-600">156</span>
            </button>

            {/* Share */}
            <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-neutral-100 transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-neutral-700">
                <g>
                  <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.29 3.3-1.42-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" fill="currentColor"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* More menu */}
        <button className="h-8 w-8 shrink-0 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-neutral-600">
            <g>
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </g>
          </svg>
        </button>
      </div>
    </article>
  );
}
