import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
// import Navbar from './components/Navbar'
import Home from './components/Home'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import Comments from './components/Comments'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/articles" element = {<Articles />} />
        <Route path = "/articles/:article_id" element = {<SingleArticle />} />
      </Routes>
    </div>
  )
}

export default App
