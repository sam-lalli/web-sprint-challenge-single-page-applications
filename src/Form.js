import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Form = (pizzaOrder, setPizzaOrder, pizzaForm, setPizzaForm) => {

    //onchange
    const onChange = e => {
        const {name, value, type, checked} = e.target
        const trueValue = type === 'checkbox' ? checked : value
        setPizzaForm({
            ...pizzaForm, 
            [name]: trueValue
        })
    }


    //onsubmit

    //validate


    return(
        <div>
            <header>
            <h1>Lambda Eats</h1>
            <Link to={'/'}>Home</Link>
            </header>
            <h1>Build Your Pizza, Your Way</h1>
            <h3>fill out the form below to order your pizza</h3>
            <form>
                <label>Name:</label>
                <input 
                type='text'
                name='name'
                //value
                //onchange
                placeholder="Enter Name here"
                />
                <br></br>
                <label>Pizza Size</label>
                <select name="size" //value= onChange={onChange}
                    >
                    <option value=''>-select your size-</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Lambda'>Lambda Large</option>
                </select>
                <br></br>
                <label>Pepperoni</label>
                <input 
                type='checkbox'
                name='pepperoni'
                //checked
                //onchange
                />
                <br></br>
                <label>Bacon</label>
                <input 
                type='checkbox'
                name='bacon'
                //checked
                //onchange
                />
                <br></br>
                <label>Sausage</label>
                <input 
                type='checkbox'
                name='sausage'
                //checked
                //onchange
                />
                <br></br>
                <label>Onion</label>
                <input 
                type='checkbox'
                name='onion'
                //checked
                //onchange
                />
                <br></br>
                <label>Ham</label>
                <input 
                type='checkbox'
                name='ham'
                //checked
                //onchange
                />
                <br></br>
<               label>Peppers</label>
                <input 
                type='checkbox'
                name='peppers'
                //checked
                //onchange
                />
                <br></br>
                <label>Pineapple</label>
                <input 
                type='checkbox'
                name='pineapple'
                //checked
                //onchange
                />
                <br></br>
                <label>Mushrooms</label>
                <input 
                type='checkbox'
                name='mushrooms'
                //checked
                //onchange
                />
                <br></br>

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Form