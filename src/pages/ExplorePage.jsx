import React from 'react';

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header with Search */}
        <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Explore</h1>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for people, topics, or keywords..."
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Quick Categories */}
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium border border-sky-200">
              Trending
            </button>
            <button className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200 hover:bg-neutral-200">
              News
            </button>
            <button className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200 hover:bg-neutral-200">
              Sports
            </button>
            <button className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200 hover:bg-neutral-200">
              Technology
            </button>
            <button className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200 hover:bg-neutral-200">
              Entertainment
            </button>
            <button className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200 hover:bg-neutral-200">
              Politics
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trending Topics */}
            {/* <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Trending Topics</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg cursor-pointer transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500">Trending in Technology</span>
                      <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                      <span className="text-xs text-neutral-500">24.5K posts</span>
                    </div>
                    <h3 className="font-bold text-neutral-900">#ReactJS</h3>
                    <p className="text-sm text-neutral-600">New React 19 features announced</p>
                  </div>
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg cursor-pointer transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500">Trending in Business</span>
                      <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                      <span className="text-xs text-neutral-500">18.2K posts</span>
                    </div>
                    <h3 className="font-bold text-neutral-900">#StartupLife</h3>
                    <p className="text-sm text-neutral-600">Entrepreneurship stories and tips</p>
                  </div>
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg cursor-pointer transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500">Trending in Design</span>
                      <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                      <span className="text-xs text-neutral-500">12.8K posts</span>
                    </div>
                    <h3 className="font-bold text-neutral-900">#UIDesign</h3>
                    <p className="text-sm text-neutral-600">Latest UI/UX trends and inspiration</p>
                  </div>
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg cursor-pointer transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500">Trending in AI</span>
                      <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                      <span className="text-xs text-neutral-500">31.1K posts</span>
                    </div>
                    <h3 className="font-bold text-neutral-900">#MachineLearning</h3>
                    <p className="text-sm text-neutral-600">AI breakthroughs and applications</p>
                  </div>
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg cursor-pointer transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500">Trending</span>
                      <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                      <span className="text-xs text-neutral-500">9.7K posts</span>
                    </div>
                    <h3 className="font-bold text-neutral-900">#WebDevelopment</h3>
                    <p className="text-sm text-neutral-600">Full-stack development discussions</p>
                  </div>
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <button className="w-full mt-4 text-sky-600 hover:underline text-sm font-medium">
                Show more trends
              </button>
            </div> */}

            {/* Popular Posts */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Popular Posts</h2>
              
              <div className="space-y-4">
                {/* Popular Post 1 */}
                <article className="border-b border-neutral-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex gap-3">
                    <img
                      src="https://i.pravatar.cc/100?img=10"
                      alt="Tech Guru"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 text-sm">
                        <span className="font-bold text-neutral-900">Tech Guru</span>
                        <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                        </svg>
                        <span className="text-neutral-500">@techguru</span>
                        <span className="text-neutral-400">·</span>
                        <time className="text-neutral-500">5h</time>
                      </div>
                      <p className="mt-1 text-[15px] text-neutral-900">
                        The future of web development is incredibly exciting! With new frameworks and tools emerging, developers have more power than ever. 
                        <span className="text-sky-600"> #WebDev</span>
                        <span className="text-sky-600"> #JavaScript</span>
                      </p>
                      <div className="mt-2 flex items-center gap-6 text-neutral-500 text-sm">
                        <span>1.2K replies</span>
                        <span>890 retweets</span>
                        <span>5.4K likes</span>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Popular Post 2 */}
                <article className="border-b border-neutral-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex gap-3">
                    <img
                      src="https://i.pravatar.cc/100?img=15"
                      alt="Design Maven"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 text-sm">
                        <span className="font-bold text-neutral-900">Design Maven</span>
                        <span className="text-neutral-500">@designmaven</span>
                        <span className="text-neutral-400">·</span>
                        <time className="text-neutral-500">8h</time>
                      </div>
                      <p className="mt-1 text-[15px] text-neutral-900">
                        Color theory in UI design: Understanding how colors affect user emotions and behavior is crucial for creating effective interfaces. 🎨
                        <span className="text-sky-600"> #UIDesign</span>
                        <span className="text-sky-600"> #ColorTheory</span>
                      </p>
                      <div className="mt-3 overflow-hidden rounded-2xl border border-neutral-200">
                        <img
                          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop"
                          alt="Color palette"
                          className="w-full h-40 object-cover"
                        />
                      </div>
                      <div className="mt-2 flex items-center gap-6 text-neutral-500 text-sm">
                        <span>567 replies</span>
                        <span>1.2K retweets</span>
                        <span>3.8K likes</span>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Popular Post 3 */}
                <article className="border-b border-neutral-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex gap-3">
                    <img
                      src="https://i.pravatar.cc/100?img=22"
                      alt="AI Explorer"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 text-sm">
                        <span className="font-bold text-neutral-900">AI Explorer</span>
                        <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                        </svg>
                        <span className="text-neutral-500">@aiexplorer</span>
                        <span className="text-neutral-400">·</span>
                        <time className="text-neutral-500">12h</time>
                      </div>
                      <p className="mt-1 text-[15px] text-neutral-900">
                        Machine learning models are getting more sophisticated every day. The applications in healthcare, finance, and education are revolutionary! 🤖
                        <span className="text-sky-600"> #MachineLearning</span>
                        <span className="text-sky-600"> #AI</span>
                      </p>
                      <div className="mt-2 flex items-center gap-6 text-neutral-500 text-sm">
                        <span>2.1K replies</span>
                        <span>3.4K retweets</span>
                        <span>9.2K likes</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <button className="w-full mt-4 text-sky-600 hover:underline text-sm font-medium">
                View more popular posts
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Who to Follow */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">Who to follow</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/100?img=25"
                      alt="React Team"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-neutral-900 text-sm">React</span>
                        <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                        </svg>
                      </div>
                      <p className="text-xs text-neutral-500">@reactjs</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors">
                    Follow
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/100?img=30"
                      alt="Vercel"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-neutral-900 text-sm">Vercel</span>
                        <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                        </svg>
                      </div>
                      <p className="text-xs text-neutral-500">@vercel</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors">
                    Follow
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/100?img=35"
                      alt="Figma"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-neutral-900 text-sm">Figma</span>
                        <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                        </svg>
                      </div>
                      <p className="text-xs text-neutral-500">@figma</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 border border-neutral-300 text-neutral-900 text-sm font-medium rounded-full hover:bg-neutral-50 transition-colors">
                    Following
                  </button>
                </div>
              </div>

              <button className="w-full mt-4 text-sky-600 hover:underline text-sm font-medium">
                Show more suggestions
              </button>
            </div>

            {/* Trending News */}
            {/* <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">Trending News</h2>
              
              <div className="space-y-4">
                <article className="cursor-pointer hover:bg-neutral-50 p-3 rounded-lg transition-colors">
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=150&auto=format&fit=crop"
                      alt="Tech news"
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-neutral-500 mb-1">Technology • 2 hours ago</p>
                      <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                        New AI breakthrough announced at major tech conference
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1">Trending with #AI, #Technology</p>
                    </div>
                  </div>
                </article>

                <article className="cursor-pointer hover:bg-neutral-50 p-3 rounded-lg transition-colors">
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=150&auto=format&fit=crop"
                      alt="Startup news"
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-neutral-500 mb-1">Business • 4 hours ago</p>
                      <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                        Startup raises $50M in Series B funding round
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1">Trending with #Startup, #Funding</p>
                    </div>
                  </div>
                </article>

                <article className="cursor-pointer hover:bg-neutral-50 p-3 rounded-lg transition-colors">
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=150&auto=format&fit=crop"
                      alt="Web development"
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-neutral-500 mb-1">Development • 6 hours ago</p>
                      <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                        Major framework update brings new features
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1">Trending with #WebDev, #Framework</p>
                    </div>
                  </div>
                </article>
              </div>

              <button className="w-full mt-4 text-sky-600 hover:underline text-sm font-medium">
                Show more news
              </button>
            </div> */}

            {/* Quick Stats */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">Platform Stats</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">Active users today</span>
                  <span className="font-semibold text-neutral-900">2.4M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">Posts published</span>
                  <span className="font-semibold text-neutral-900">89.2K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">Trending hashtags</span>
                  <span className="font-semibold text-neutral-900">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">New connections</span>
                  <span className="font-semibold text-neutral-900">15.8K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
