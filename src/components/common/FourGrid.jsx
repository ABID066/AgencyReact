import React from 'react';

const FourGrid = ({FeatureList}) => {
    return (
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {FeatureList.map((feature, index) => (
                <div key={index}>
                    {feature.icon}
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">{feature.title}</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FourGrid;