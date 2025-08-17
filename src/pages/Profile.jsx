import React from 'react';

const UserProfilePage = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        {/* Cover Photo & Profile Header */}
        <div className="bg-white border border-neutral-200 rounded-b-lg overflow-hidden">
          {/* Cover Photo */}
          <div className="relative h-48 sm:h-64 bg-gradient-to-r from-sky-400 to-blue-500">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
              alt="Cover"
              className="w-full h-full object-cover"
            />
            {/* Edit Cover Photo Button (shown when it's user's own profile) */}
            <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/60 transition-colors">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          {/* Profile Info */}
          <div className="relative px-4 pb-4">
            {/* Profile Picture */}
            <div className="relative -mt-16 mb-4">
              <div className="relative inline-block">
                <img
                  src="https://i.pravatar.cc/150?img=5"
                  alt="Sarah Johnson"
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-2 right-2 p-1.5 bg-neutral-900 rounded-full text-white hover:bg-neutral-800 transition-colors">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2">
                {/* More Options */}
                <button className="p-2 border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors">
                  <svg className="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
                
                {/* Message Button */}
                <button className="p-2 border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors">
                  <svg className="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>

                {/* Follow/Edit Profile Button */}
                <button className="px-6 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors font-bold">
                  Edit Profile
                </button>
                {/* Alternative for other users:
                <button className="px-6 py-2 border border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-colors font-bold">
                  Follow
                </button>
                */}
              </div>
            </div>

            {/* User Info */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-neutral-900">Sarah Johnson</h1>
                  <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                  </svg>
                </div>
                <p className="text-neutral-500">@sarahjohnson</p>
              </div>

              <p className="text-neutral-900 text-[15px] leading-6">
                Product Designer & UI/UX enthusiast 🎨 Building beautiful digital experiences. 
                Love coffee, design systems, and good typography. San Francisco, CA.
              </p>

              {/* Profile Details */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <a href="#" className="text-sky-600 hover:underline">sarahjohnson.design</a>
                </div>
                
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h4a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                  </svg>
                  <span>Joined March 2020</span>
                </div>
              </div>

              {/* Following/Followers */}
              <div className="flex items-center gap-6 text-sm">
                <button className="hover:underline">
                  <span className="font-bold text-neutral-900">1,234</span>
                  <span className="text-neutral-500 ml-1">Following</span>
                </button>
                <button className="hover:underline">
                  <span className="font-bold text-neutral-900">5,678</span>
                  <span className="text-neutral-500 ml-1">Followers</span>
                </button>
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
            <button className="flex-1 px-4 py-4 text-center font-medium text-neutral-500 hover:bg-neutral-50 transition-colors">
              Replies
            </button>
            <button className="flex-1 px-4 py-4 text-center font-medium text-neutral-500 hover:bg-neutral-50 transition-colors">
              Media
            </button>
            <button className="flex-1 px-4 py-4 text-center font-medium text-neutral-500 hover:bg-neutral-50 transition-colors">
              Likes
            </button>
          </nav>
        </div>

        {/* Posts Feed */}
        <div className="bg-white border-l border-r border-b border-neutral-200 rounded-b-lg">
          {/* Pinned Post */}
          <article className="border-b border-neutral-100 bg-neutral-50/50">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-neutral-500 text-sm">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>Pinned Post</span>
              </div>
              
              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/100?img=5"
                  alt="Sarah Johnson"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-sm">
                    <span className="font-bold text-neutral-900">Sarah Johnson</span>
                    <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                    </svg>
                    <span className="text-neutral-500">@sarahjohnson</span>
                    <span className="text-neutral-400">·</span>
                    <time className="text-neutral-500">Jul 15</time>
                  </div>
                  
                  <p className="mt-1 text-[15px] text-neutral-900">
                    Excited to share my new portfolio website! 🎉 It showcases my latest UI/UX projects and design process. 
                    Check it out and let me know what you think! 
                    <span className="text-sky-600"> #UIDesign</span>
                    <span className="text-sky-600"> #Portfolio</span>
                  </p>

                  <div className="mt-3 overflow-hidden rounded-2xl border border-neutral-200">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                      alt="Portfolio website"
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between max-w-md text-neutral-500">
                    <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-sky-50 transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-sky-600">
                        <g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c.683 0 1.237.54 1.237 1.206 0 .665-.554 1.206-1.237 1.206H9.756C6.931 4.412 4.75 6.558 4.75 9.25c0 2.685 2.181 4.832 4.005 4.832.671 0 1.215.54 1.215 1.206 0 .665-.544 1.206-1.215 1.206-3.621 0-6.004-2.917-6.004-6.494z" fill="currentColor"></path></g>
                      </svg>
                      <span className="text-xs group-hover:text-sky-600">42</span>
                    </button>

                    <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-emerald-50 transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-emerald-600">
                        <g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.791-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88z" fill="currentColor"></path></g>
                      </svg>
                      <span className="text-xs group-hover:text-emerald-600">28</span>
                    </button>

                    <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-rose-50 transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-rose-600">
                        <g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.030-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91z" fill="currentColor"></path></g>
                      </svg>
                      <span className="text-xs group-hover:text-rose-600">186</span>
                    </button>

                    <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-neutral-100 transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-neutral-700">
                        <g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.29 3.3-1.42-1.42L12 2.59z" fill="currentColor"></path></g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Regular Posts */}
          <article className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors cursor-pointer">
            <div className="p-4 flex gap-3">
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt="Sarah Johnson"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-bold text-neutral-900">Sarah Johnson</span>
                  <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                  </svg>
                  <span className="text-neutral-500">@sarahjohnson</span>
                  <span className="text-neutral-400">·</span>
                  <time className="text-neutral-500">2h</time>
                </div>
                
                <p className="mt-1 text-[15px] text-neutral-900">
                  Working on a new design system for our upcoming product launch. The component library is looking clean and consistent! 
                  Can't wait to share more details soon. 
                  <span className="text-sky-600"> #DesignSystem</span>
                  <span className="text-sky-600"> #ProductDesign</span>
                </p>

                <div className="mt-3 flex items-center justify-between max-w-md text-neutral-500">
                  <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-sky-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-sky-600">
                      <g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c.683 0 1.237.54 1.237 1.206 0 .665-.554 1.206-1.237 1.206H9.756C6.931 4.412 4.75 6.558 4.75 9.25c0 2.685 2.181 4.832 4.005 4.832.671 0 1.215.54 1.215 1.206 0 .665-.544 1.206-1.215 1.206-3.621 0-6.004-2.917-6.004-6.494z" fill="currentColor"></path></g>
                    </svg>
                    <span className="text-xs group-hover:text-sky-600">15</span>
                  </button>

                  <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-emerald-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-emerald-600">
                      <g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.791-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88z" fill="currentColor"></path></g>
                    </svg>
                    <span className="text-xs group-hover:text-emerald-600">8</span>
                  </button>

                  <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-rose-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-rose-600">
                      <g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.030-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91z" fill="currentColor"></path></g>
                    </svg>
                    <span className="text-xs group-hover:text-rose-600">73</span>
                  </button>

                  <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-neutral-100 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-neutral-700">
                      <g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.29 3.3-1.42-1.42L12 2.59z" fill="currentColor"></path></g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors cursor-pointer">
            <div className="p-4 flex gap-3">
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt="Sarah Johnson"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-bold text-neutral-900">Sarah Johnson</span>
                  <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                  </svg>
                  <span className="text-neutral-500">@sarahjohnson</span>
                  <span className="text-neutral-400">·</span>
                  <time className="text-neutral-500">5h</time>
                </div>
                
                <p className="mt-1 text-[15px] text-neutral-900">
                  Coffee shop inspiration strikes again! ☕️ Sometimes the best design ideas come when you step away from your desk. 
                  What's your favorite place to brainstorm?
                  <span className="text-sky-600"> #DesignLife</span>
                  <span className="text-sky-600"> #Inspiration</span>
                </p>

                <div className="mt-3 overflow-hidden rounded-2xl border border-neutral-200">
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop"
                    alt="Coffee shop workspace"
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between max-w-md text-neutral-500">
                  <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-sky-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-sky-600">
                      <g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c.683 0 1.237.54 1.237 1.206 0 .665-.554 1.206-1.237 1.206H9.756C6.931 4.412 4.75 6.558 4.75 9.25c0 2.685 2.181 4.832 4.005 4.832.671 0 1.215.54 1.215 1.206 0 .665-.544 1.206-1.215 1.206-3.621 0-6.004-2.917-6.004-6.494z" fill="currentColor"></path></g>
                    </svg>
                    <span className="text-xs group-hover:text-sky-600">24</span>
                  </button>

                  <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-emerald-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-emerald-600">
                      <g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.791-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88z" fill="currentColor"></path></g>
                    </svg>
                    <span className="text-xs group-hover:text-emerald-600">12</span>
                  </button>

                  <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-rose-50 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-rose-600">
                      <g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.030-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91z" fill="currentColor"></path></g>
                    </svg>
                    <span className="text-xs group-hover:text-rose-600">156</span>
                  </button>

                  <button className="group flex items-center gap-1 rounded-full p-2 hover:bg-neutral-100 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 group-hover:fill-neutral-700">
                      <g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.29 3.3-1.42-1.42L12 2.59z" fill="currentColor"></path></g>
                    </svg>
                  </button>
                </div>
              </div>
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
