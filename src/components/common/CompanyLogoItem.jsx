import React from 'react';

const CompanyLogoItem = ({Icon}) => {
    return (
        <div
            className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            {Icon.map((item, index) => (
                <a href="#" key={index} className="flex items-center lg:justify-center">
                    {item.icon}
                </a>
            ))}
        </div>
    )
}

export default CompanyLogoItem;