import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Articles from './components/Articles'
import ArticleShowCard from './components/ArticleShowCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/articles" element = {<Articles />} />
        <Route path = "/article" element = {<ArticleShowCard />} />
      </Routes>

    </div>
  )
}

export default App
