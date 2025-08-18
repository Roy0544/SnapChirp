import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authservice from './appwrite/auth'
import './App.css'
import { login, logout } from './store/authSlice'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Homel from './pages/Homel'
import ExplorePage from './pages/ExplorePage'
import CreatePostPage from './pages/Create'
import UserProfilePage from './pages/Profile'
import SignUpPage from './pages/SignUpPage'
import LoginForm from './pages/Login'


function App() {
  const [loading, setloading] = useState(true)
  const dispatch=useDispatch()
  const authstate=useSelector((state)=>state.auth.status)
  
  useEffect(() => {
  
authservice.getCurrentUser()
.then((userdata)=>{
  if(userdata){
    dispatch(login(userdata))
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
    <Route index element={authstate ? <Navigate to="/home" /> : <Home />} />
  <Route path='/home' element={<Homel/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/explore' element={<ExplorePage/>}/>
  <Route path='/create' element={<CreatePostPage/>}/>
  <Route path='/user' element={<UserProfilePage/>}/>

  </Route>
  <Route path='/signup' element={<SignUpPage/>}/>
  <Route path='/login' element={<LoginForm/>}/>
</Routes>

</div>

      </>
    )
  }
}

export default App
