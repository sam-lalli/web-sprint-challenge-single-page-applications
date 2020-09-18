import React, { useState, useEffect} from "react";
import { Route } from 'react-router-dom'
import Form from "./Form";
import Home from "./Home";
import schema from './formSchema'


const initialFormErrors = {
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
}

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState([])
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(false)
  const [pizzaForm, setPizzaForm] = useState({
    order_name: '',
    size: '',
    instructions: "",
    pepperoni: false,
    bacon: false,
    sausage: false,
    onion: false,
    ham: false,
    peppers: false,
    pineapple: false,
    save: false, 
  })

  useEffect(() => {
    schema.isValid(pizzaForm)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [pizzaForm])

  return (
    <>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form 
        pizzaOrder={pizzaOrder}
        setPizzaOrder={setPizzaOrder}
        pizzaForm={pizzaForm}
        setPizzaForm={setPizzaForm}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        disabled={disabled}
        />
      </Route>
    </>
  );
};
export default App;
