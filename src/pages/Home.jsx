import React from 'react'
import Card from  '../assets/Twitter.svg'
import ResponsiveTestimonialCarousel from '../components/Testimonials'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()

  const navigatetologin=()=>{
    navigate('/login')
  }
  return (
    <div>

    <div className='w-[80vw] m-auto flex flex-col lg:flex-row justify-center items-center mt-[80px]'>
      <div id="left" className='w-[90%] lg:w-[40%]' >

      <p className='text-5xl'>Conncet Share  <br /> Discover </p>
      <p className='mt-6'>"Welcome to SnapChirp — a space built for simplicity, security, and community.
Sign in to explore and share.
Your journey starts here."</p>
      <button onClick={navigatetologin} className='mt-9 text-2xl text-center bg-blue-400 text-white font-medium w-[180px] rounded-2xl h-11'>Get Started</button>
      </div>
      <div id="right" className='mt-16 '>
        {/* <img src={Card} className='w-[486px]' alt="" /> */}
        <article className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl ring-1 ring-gray-900/10 border border-gray-100">
      <div className="flex items-start gap-4">
        <img
          alt="User avatar"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOQfOVtIBQ03CqKlejWqYHyH-4Wwrd5dLg0nB8DMD1hJJVan3koiSqXe6t6nCSQ71pKgccKpzTg9bcmcnVNZI9j3XaDaVv1X46X_oqaHPw_Kqw-mQB5WveWJtlvVBRHyG7WpahzQSdhXYJN-sMu7CVOddyukBzE6KS2GzbpNcQJtsMjm-Bnumtee81ahgnbCzSYiCa0Hph8_cmWzsyANaC14yGF1KPRapLLqD45MN7zOgn7Giqi_aSNJHP_VlqRTScipaoKbGcuwY"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900">Sarah Lane</p>
              <p className="text-sm text-gray-500">@sarahlane</p>
            </div>
            <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>

          <p className="mt-4 text-gray-800">
            Just discovered the most amazing little coffee shop in the city! ☕️ The latte art is on another level.
            <span className="text-sky-600"> #coffee #localfinds #citylife</span>
          </p>

          <div className="mt-4 flex justify-between text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
              </svg>
              <span>12</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 4v5h5M7 9l4-4 4 4M4 14h5v5M7 15l4 4 4-4" />
              </svg>
              <span>5</span>
            </div>

            <div className="flex items-center gap-2 text-pink-500">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>28</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </article>
      </div>
    </div>
      <div id="bottompart" className='w-[80vw] m-auto mt-18 '>

        <h1 className='text-center text-3xl font-medium'> What Our Users Are Saying</h1>
        <p className='text-center text-[17px] mt-4'>From Users</p>
      </div>
      <div>
        <ResponsiveTestimonialCarousel/>
      </div>
          </div>
  )
}

export default Home
