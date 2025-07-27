import React from 'react';
import {Facebook} from "../svg/svg.jsx";

export  function FooterItem ({ItemFooter}) {
    return (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {ItemFooter.map((item, index) => (
                <div key={index}>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{item.title}</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        {item.list.map((singleItem, index) => (
                            <li key={index} className="mb-4">
                                <a href="#" className=" hover:underline">{singleItem}</a>
                            </li>
                    ))}
                </ul>
                </div>
                ))}
        </div>
    );
}

export function FooterIcon({IconList}) {
    return (
        <ul className="flex justify-center mt-5 space-x-5">
                {IconList.map((item, index) => (
                    <li key={index}>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            {item.icon}
                        </a>
                    </li>
                ))}
        </ul>
    )
}





