import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';

export const MyContext = createContext();

function App() {
  const [food, setFood] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => setFood(data.categories))
      .catch(err => console.log(err))
  }, [])

  return (
    <MyContext.Provider value={{
      foodState: [food, setFood],
      mealState: [meals, setMeals]
    }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/:category">
            <Meals></Meals>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
