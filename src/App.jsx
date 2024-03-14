import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import Topics from './components/Topics'
import Users from './components/Users'
import './App.css'
import UserContext from './contexts/User'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: 'strongbuddy',
    avatar_url: 'Mr.Strong.png'
  })

  return (
    <>
    <UserContext.Provider value={{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>
      <Header />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/articles" element = {<Articles />} />
          <Route path = "/articles/:article_id" element = {<SingleArticle />} />
          <Route path = "/topics" element = {<Topics/>}/>
          <Route path = "/users" element = {<Users/>}/>
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
