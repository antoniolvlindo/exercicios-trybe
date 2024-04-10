import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Coffeeteria</h1>
      <Link to="/coffee">
        <button>conheca nossos produtos</button>
      </Link>
    </>
  )
}

export default Home;