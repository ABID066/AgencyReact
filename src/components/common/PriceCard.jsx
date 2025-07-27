import React from 'react';
import {JustChecked} from "../svg/svg.jsx";
import Button from "./Button.jsx";

const PriceCard = ({itemList}) => {
    return (
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {itemList.map((item, index) => (
                <div key={index}
                    className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{item.description}</p>
                    <div className="flex items-baseline justify-center my-8">
                        <span className="mr-2 text-5xl font-extrabold">${item.price}</span>
                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>

                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">

                            <JustChecked/>
                            <span>Individual configuration</span>
                        </li>
                        <li className="flex items-center space-x-3">

                            <JustChecked/>
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">

                            <JustChecked/>
                            <span>Team size: <span className="font-semibold">{item.teamSize}</span></span>
                        </li>
                        <li className="flex items-center space-x-3">

                            <JustChecked/>
                            <span>Premium support: <span className="font-semibold">{item.support}</span></span>
                        </li>
                        <li className="flex items-center space-x-3">

                            <JustChecked/>
                            <span>Free updates: <span className="font-semibold">{item.support}</span></span>
                        </li>
                    </ul>
                    <Button Text="Get started"/>
                </div>
            ))}
        </div>
    );
};

export default PriceCard;