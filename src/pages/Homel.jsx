import React, { useEffect, useRef, useState } from 'react'
import TweetCard from '../components/TweetCard'
import service from '../appwrite/data'
import uploadservice from '../appwrite/file'
import authservice from '../appwrite/auth'


function Homel() {

  const [postdata, setpostdata] = useState([])
  const [iamge, setiamge] = useState(null)
  const [currentUserId, setCurrentUserId] = useState("") 
  const [searchUser, setSearchUser] = useState("");
const [searchHashtag, setSearchHashtag] = useState("");

  useEffect(() => {
    const getposts = async () => {
      try {
        const posts = await service.getposts();
     
        setpostdata(posts.documents);
        
      


      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    };

    getposts();
  }, [])

   useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const user = await authservice.getCurrentUser();
                if (user) {
                    setCurrentUserId(user.$id);
                    
                }
            } catch (error) {
                console.log('Error getting user:', error);
            }
        };
        getCurrentUser();
    }, []);


    const filteredPosts = postdata.filter(post => {
  const matchesUser = post.username
    ?.toLowerCase()
    .includes(searchUser.toLowerCase());

  const matchesHashtag = searchHashtag
    ? post.content?.toLowerCase().includes(`#${searchHashtag.toLowerCase()}`)
    : true;

  return matchesUser && matchesHashtag;
});

  // console.log(postdata);
  
  const clearhandler=()=>{
    setSearchUser("")
    setSearchHashtag("")
    
  }




  return (
    <div>
      <div className=' md:mt-12 flex justify-between w-full'>
        <div id="left" className='w-full md:w-[60vw] ml-4 flex flex-col gap-4  items-center'>
          <div className='flex gap-26 text-black  text-[26px] cursor-pointer mt-7 font-bold'>

            <div className='hover:translate-1 hover:text-gray-600'>For You</div>
           
          </div>
          {filteredPosts  .map((post)=>(

          <TweetCard key={post.$id} name={post.username} content={post.content} image={post.featuredImage} postId={post.slug} userId={currentUserId}  initialLikesCount={post.likescount ||0} time={post.$createdAt} />
          ))}
        
         

        </div>
        <div id="right" className='hidden md:inline-block'>
          {/* Filter Sidebar - 40% Sticky */}
          <aside className="w-[35vw] sticky top-4 h-fit p-4">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-neutral-900">Filters</h2>
                <button onClick={clearhandler} className="text-sm text-sky-600 hover:underline font-medium">
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
                    value={ searchUser}
                      onChange={(e) => setSearchUser(e.target.value)}
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
                    value={ searchHashtag}
                      onChange={(e) =>  setSearchHashtag(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 mb-3"
                  />

              
                 
                </div>

             
               

             
              

              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default Homel
