import React, {useEffect} from 'react'
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import OrderStatus from './OrderStatus'
import * as yup from 'yup'
import schema from './formSchema'



const Form = ({pizzaOrder, setPizzaOrder, pizzaForm, setPizzaForm, formErrors, setFormErrors}) => {


    //validate
    const validate = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(valid => { //eslint-disable-line
            setFormErrors({
              ...formErrors,
              [name]: ""
            })
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            });
          })
    }

    //onchange
    const onChange = e => {
        const {name, value, type, checked} = e.target
        const trueValue = type === 'checkbox' ? checked : value
        validate(name, value)
        setPizzaForm({
            ...pizzaForm, 
            [name]: trueValue
        })
    }


    //onsubmit
    const onSubmit = e => {
        e.preventDefault();
        axios.post('https://reqres.in/api/pizza', pizzaForm)
            .then((res) => {
                console.log(res.data)
                setPizzaForm({
                    order_name: '',
                    size: '',
                    instructions: '',
                    pepperoni: false,
                    bacon: false,
                    sausage: false,
                    onion: false,
                    ham: false,
                    peppers: false,
                    pineapple: false,
                    save: false,
                })
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <header>
            <h1>Lambda Eats</h1>
            <Link to={'/'}>Home</Link>
            </header>
            <h1>Build Your Pizza, Your Way</h1>
            <h3>fill out the form below to order your pizza</h3>
            <form onSubmit={onSubmit}>
                <label>Name:</label>
                <input 
                type='text'
                value={pizzaForm.order_name}
                name='order_name'
                onChange={onChange}
                placeholder="Enter Name here"
                />
                <br></br>
                <label>Pizza Size</label>
                <select name="size" value={pizzaForm.size} onChange={onChange}>
                    <option value=''>-select your size-</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Lambda'>Lambda Large</option>
                </select>
                
                <label>Special Instructions:</label>
                <input 
                type='text'
                value={pizzaForm.instructions}
                name='instructions'
                onChange={onChange}
                placeholder="Enter instructions"
                />
                <br></br>
                <label>Pepperoni</label>
                <input 
                type='checkbox'
                name='pepperoni'
                checked={pizzaForm.pepperoni}
                onChange={onChange}
                />
                <br></br>
                <label>Bacon</label>
                <input 
                type='checkbox'
                name='bacon'
                checked={pizzaForm.bacon}
                onChange={onChange}
                />
                <br></br>
                <label>Sausage</label>
                <input 
                type='checkbox'
                name='sausage'
                checked={pizzaForm.sausage}
                onChange={onChange}
                />
                <br></br>
                <label>Onion</label>
                <input 
                type='checkbox'
                name='onion'
                checked={pizzaForm.onion}
                onChange={onChange}
                />
                <br></br>
                <label>Ham</label>
                <input 
                type='checkbox'
                name='ham'
                checked={pizzaForm.ham}
                onChange={onChange}
                />
                <br></br>
<               label>Peppers</label>
                <input 
                type='checkbox'
                name='peppers'
                checked={pizzaForm.peppers}
                onChange={onChange}
                />
                <br></br>
                <label>Pineapple</label>
                <input 
                type='checkbox'
                name='pineapple'
                checked={pizzaForm.pineapple}
                onChange={onChange}
                />
                <br></br>
                <label>Save Toppings</label>
                <input 
                type='checkbox'
                name='save'
                checked={pizzaForm.save}
                onChange={onChange}
                />
                <br></br>

                <button type="submit">SUBMIT</button>
                <div className='errors'>
                        <div>{formErrors.order_name}</div>
                        <div>{formErrors.size}</div>
                        <div>{formErrors.topping}</div>
                </div>
            </form>
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
                        <div key={index}>
                            <h2>Name: {order_name}</h2>
                            <p>Size: {size}</p>
                            <p>Toppings:</p>
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
    )
}

export default Form