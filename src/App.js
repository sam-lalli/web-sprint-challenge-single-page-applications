import React, { useState,} from "react";
import { Route } from 'react-router-dom'
import Form from "./Form";
import Home from "./Home";


const initialFormErrors = {
  order_name: '',
  size: '',
  pepperoni: false,
  bacon: false,
  sausage: false,
  onion: false,
  ham: false,
  peppers: false,
  pineapple: false,
  mushrooms: false,
}

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState([])
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [pizzaForm, setPizzaForm] = useState({
    order_name: '',
    size: '',
    pepperoni: false,
    bacon: false,
    sausage: false,
    onion: false,
    ham: false,
    peppers: false,
    pineapple: false,
    mushrooms: false,

  })
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
        />
      </Route>
    </>
  );
};
export default App;
