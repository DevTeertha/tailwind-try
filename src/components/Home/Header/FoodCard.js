import React from 'react';
import { Link } from "react-router-dom";
const FoodCard = (props) => {
    const { strCategory, strCategoryDescription, strCategoryThumb } = props.fd;
    return (
        <div class="py-5 shadow-xl hover:border-pink-500 border max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={strCategoryThumb} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{strCategory}</div>
                <p class="text-gray-700 text-base">{strCategoryDescription.slice(0, 50) + "..."}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <Link to={`/${strCategory}`}>
                    <button className="mt-5 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">View</button>
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;