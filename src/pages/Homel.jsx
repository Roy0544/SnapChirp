import React, { useEffect, useState } from 'react'
import TweetCard from '../components/TweetCard'
import service from '../appwrite/data'
import uploadservice from '../appwrite/file'


function Homel() {

  const [postdata, setpostdata] = useState([])
  const [iamge, setiamge] = useState(null)
  useEffect(() => {
    const getposts = async () => {
      try {
        const posts = await service.getposts();
        // console.log('Full response:', posts);
        console.log('Documents:', posts.documents);
        // Save the documents array to state, not the full response
        setpostdata(posts.documents);
        
      


      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    };

    getposts();
  }, [])

  console.log(postdata);
  




  return (
    <div>
      <div className=' md:mt-12 flex justify-between w-full'>
        <div id="left" className='w-full md:w-[60vw] ml-4 flex flex-col gap-4  items-center'>
          <div className='flex gap-26 text-black font-medium text-[21px] cursor-pointer mt-7 '>

            <div className='hover:translate-1 hover:text-gray-600'>For You</div>
            <div className='hover:translate-1 hover:text-gray-600'>Following</div>
          </div>
          {postdata.map((post)=>(

          <TweetCard key={post.$id} name={post.username} content={post.content} image={post.featuredImage} />
          ))}
          {/* <TweetCard /> */}
         

        </div>
        <div id="right" className='hidden md:inline-block'>
          {/* Filter Sidebar - 40% Sticky */}
          <aside className="w-[35vw] sticky top-4 h-fit p-4">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-neutral-900">Filters</h2>
                <button className="text-sm text-sky-600 hover:underline font-medium">
                  Clear all
                </button>
              </div>

              <div className="space-y-6">
                {/* Search by Username */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Search by User
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username or display name..."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>

                {/* Search by Hashtag */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Filter by Hashtag
                  </label>
                  <input
                    type="text"
                    placeholder="Enter hashtag (without #)..."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 mb-3"
                  />

                  {/* Popular Hashtags */}
                  <div>
                    <p className="text-xs text-neutral-600 mb-2">Popular hashtags:</p>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 py-1 text-xs rounded-full border bg-sky-100 border-sky-300 text-sky-700">
                        #design
                      </button>
                      <button className="px-3 py-1 text-xs rounded-full border bg-neutral-50 border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                        #frontend
                      </button>
                      <button className="px-3 py-1 text-xs rounded-full border bg-neutral-50 border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                        #react
                      </button>
                      <button className="px-3 py-1 text-xs rounded-full border bg-neutral-50 border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                        #javascript
                      </button>
                      <button className="px-3 py-1 text-xs rounded-full border bg-neutral-50 border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                        #ai
                      </button>
                      <button className="px-3 py-1 text-xs rounded-full border bg-neutral-50 border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                        #startup
                      </button>
                      <button className="px-3 py-1 text-xs rounded-full border bg-neutral-50 border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                        #productivity
                      </button>
                      <button className="px-3 py-1 text-xs rounded-full border bg-neutral-50 border-neutral-300 text-neutral-600 hover:bg-neutral-100">
                        #coding
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sort Options */}
                {/* <div>
        <label className="block text-sm font-semibold text-neutral-900 mb-2">
          Sort by
        </label>
        <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
          <option>Newest first</option>
          <option>Most liked</option>
          <option>Most engagement</option>
        </select>
      </div> */}

                {/* Minimum Likes */}
                {/* <div>
        <label className="block text-sm font-semibold text-neutral-900 mb-2">
          Minimum Likes
        </label>
        <input
          type="number"
          placeholder="Enter minimum likes..."
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
        />
      </div> */}

                {/* Toggle Filters */}
                {/* <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-sky-600 border-neutral-300 rounded focus:ring-sky-500"
          />
          <span className="text-sm text-neutral-700">Verified accounts only</span>
          <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
          </svg>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked
            className="w-4 h-4 text-sky-600 border-neutral-300 rounded focus:ring-sky-500"
          />
          <span className="text-sm text-neutral-700">Posts with media only</span>
          <svg className="h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </label>
      </div> */}

                {/* Filter Summary */}
                {/* <div className="pt-4 border-t border-neutral-200">
        <div className="bg-neutral-50 rounded-lg p-3">
          <h4 className="text-sm font-semibold text-neutral-900 mb-2">Active Filters</h4>
          <div className="space-y-1 text-xs text-neutral-600">
            <div>• Hashtag: #design</div>
            <div>• Posts with media</div>
            <div>• Sorted by: Newest first</div>
          </div>
        </div>
      </div> */}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default Homel
