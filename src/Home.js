import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {


    return(
    <>
    <header>
        <h1>Lambda Eats</h1>
        <Link to={'/'}>Home</Link>
    </header>
    <div>
        <Link name='pizzaBtn'to={'/pizza'}>Create your Pizza</Link>
    </div>
    <footer>
        <h1>Lambda Eats</h1>
        <Link to={'/'}>Home</Link>
    </footer>
    </>
    )
}

export default Home