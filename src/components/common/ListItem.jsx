import React from 'react';

const ListItem = ({ itemList }) => {
    return (
        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
            {itemList.map((item, index) => (
                <li key={index}>
                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
};


export default ListItem;