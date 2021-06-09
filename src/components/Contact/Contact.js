import React from 'react';
import Nav from '../Home/Nav/Nav';

const Contact = () => {
    return (
        <>
            <Nav></Nav>
            <div className="container mx-auto px-8 py-6">
                <div>
                    <h1 className="text-center text-3xl text-pink-600 font-bold">Contact</h1>
                </div>
                <div className="mt-8">
                    <form action="" className="bg-white border w-2/4 rounded p-5 mx-auto">
                        <div>
                            <input className="w-full bg-gray-200 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600" type="text" placeholder="Name" />
                        </div>
                        <div className="mt-5">
                            <input className="w-full bg-gray-200 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600" type="text" placeholder="Email" />
                        </div>
                        <div className="mt-5">
                            <input className="w-full bg-gray-200 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600" type="text" placeholder="Subject" />
                        </div>
                        <div className="mt-5">
                            <textarea className="w-full bg-gray-200 appearance-none border-2 border-gray-50 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button className="mt-5 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;