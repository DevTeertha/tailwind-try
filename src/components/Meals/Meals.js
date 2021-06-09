import React, { useContext, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Nav from '../Home/Nav/Nav';
import { MyContext } from '../../App';
import MealCard from './MealCard';

const Meals = () => {
    const { mealState } = useContext(MyContext);
    const [meals, setMeals] = mealState;
    const { category } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Nav></Nav>
            <div className="container mx-auto px-8 py-6">
                <h1 className="text-center text-5xl text-gray-500"> {category} </h1>
                <div className="grid grid-cols-3 gap-4 mt-14">
                    {
                        meals.map((meal, index) => <MealCard key={index} meal={meal}></MealCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Meals;