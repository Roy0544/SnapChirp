import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import './App.css'
import { login, logout } from './store/authSlice'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Homel from './pages/Homel'
import ExplorePage from './pages/ExplorePage'
import CreatePostPage from './pages/Create'
import UserProfilePage from './pages/Profile'


function App() {
  const [loading, setloading] = useState(false)
  const dispatch=useDispatch()

useEffect(() => {
  
authservice.getCurrentUSer()
.then((userdata)=>{
  if(userdata){
    dispatch(login({userdata}))
  }
  else{
    dispatch(logout())
  }
})
.finally(()=> setloading(false))


}, [])


  if(loading){
    return <div>loading....</div>
  }
  else{
    return (
      <>
<div>

<Routes>
  <Route path='/' element={<Layout/>}>
  <Route path='/home' element={<Homel/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/explore' element={<ExplorePage/>}/>
  <Route path='/create' element={<CreatePostPage/>}/>
  <Route path='/user' element={<UserProfilePage/>}/>

  </Route>
</Routes>

</div>

      </>
    )
  }
}

export default App
