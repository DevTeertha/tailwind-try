import React, { useContext, useEffect } from 'react';
import Nav from '../Nav/Nav';
import { MyContext } from '../../../App';
import FoodCard from './FoodCard';

const Header = () => {
    const { foodState } = useContext(MyContext);
    const [food] = foodState;

    return (
        <>
            <Nav></Nav>
            <div className="container mx-auto px-8 py-6">
                <div className="w-1/2 mx-auto flex mt-9">
                    <input className="flex-initial bg-gray-200 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600" placeholder="SEARCH" type="text"/>
                    <button className="flex-initial bg-pink-600 hover:bg-pink-700 text-white font-bold px-4 rounded">Search</button>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-14">
                    {
                        food.map((fd, index)=><FoodCard fd={fd} key={index}></FoodCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Header;