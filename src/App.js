import React, { useState,} from "react";
import { Route, Link } from 'react-router-dom'
import Form from "./Form";
import Home from "./Home";

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState([])
  const [pizzaForm, setPizzaFrom] = useState({
    name: '',
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
        setPizzaFrom={setPizzaFrom}
        />
      </Route>
    </>
  );
};
export default App;
