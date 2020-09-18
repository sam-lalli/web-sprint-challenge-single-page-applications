import React from 'react'
import { Link } from 'react-router-dom'

const OrderStatus = (pizzaOrder) => {



    return (
        <>
        <header>
            <h1>Lambda Eats</h1>
            <Link to={'/'}>Home</Link>
        </header>
        <h1>Congrats! You Can View Your Order Down Below</h1>
        <div>
            {
                pizzaOrder.map((order, index) =>{
                    const {   
                    order_name,
                    size,
                    pepperoni,
                    bacon,
                    sausage, 
                    onion, 
                    ham, 
                    peppers, 
                    pineapple, 
                    mushrooms, } = order

                    return(
                        <div>
                            <h2>{order_name}</h2>
                            <p>{size}</p>
                            <p>{pepperoni}</p>
                            <p>{bacon}</p>
                            <p>{sausage}</p>
                            <p>{onion}</p>
                            <p>{ham}</p>
                            <p>{peppers}</p>
                            <p>{pineapple}</p>
                            <p>{mushrooms}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}


export default OrderStatus