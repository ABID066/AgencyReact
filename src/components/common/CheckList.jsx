import React from 'react';
import {Checked} from "../svg/svg.jsx";

const CheckList = ({itemList}) => {
    return (
        <div>
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                {itemList.map((item, index)=>(
                    <li key={index} className="flex space-x-3">
                        <Checked/>
                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
);
};

export default CheckList;