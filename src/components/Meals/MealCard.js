import React from 'react';

const MealCard = ({ meal }) => {
    const { strMeal, strMealThumb } = meal;
    return (
        <div class="pb-5 shadow-xl hover:border-pink-500 border max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={strMealThumb} alt={strMealThumb} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-gray-800">{strMeal}</div>
            </div>
        </div>
    );
};

export default MealCard;