import React, { useState,} from "react";
import { Route, Link } from 'react-router-dom'
import Form from "./Form";
import Home from "./Home";

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState([])
  const [pizzaForm, setPizzaFrom] = useState({
  })


  return (
    <>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form />
      </Route>
    </>
  );
};
export default App;
