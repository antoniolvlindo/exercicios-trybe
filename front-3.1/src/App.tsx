import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Coffee from './pages/coffee/Coffee'
import CoffeeList from './pages/coffee-list/CoffeeList'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/coffee-list" element={<CoffeeList />} />
    </Routes>
  )
}

export default App
