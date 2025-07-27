import React from 'react';
import DetailsText, {HeadLine, PurpleText} from "../common/Text.jsx";
import {Cart, Grid, People, RightArrow, World} from "../svg/svg.jsx";
import FourGrid from "../common/FourGrid.jsx";

const ServiceTwo = () => {

    const FeatureList = [
        {
            icon: <Grid/>,
            title: "99.99% uptime",
            description: "For Landwind, with zero maintenance downtime"
        },
        {
            icon: <People/>,
            title: "600M+ Users",
            description: "Trusted by over 600 million users around the world"
        },
        {
            icon: <World/>,
            title: "100+ countries",
            description: "Have used Landwind to create functional websites"
        },
        {
            icon: <Cart/>,
            title: "5+ Million",
            description: "Transactions per day"
        }
    ]

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div
                    className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div className="col-span-2 mb-8">
                        <p className="text-lg pb-3 font-medium text-purple-600 dark:text-purple-500">Trusted Worldwide</p>
                        <HeadLine Text="Trusted by over 600 million users and 10,000 teams"/>
                        <DetailsText Text="Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers."/>
                        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                            <PurpleText Text="Explore Legality Guide"/>
                            <PurpleText Text="Visit the Trust Center"/>
                        </div>
                    </div>
                    <FourGrid FeatureList={FeatureList}/>
                </div>
            </section>
        </div>
    );
};

export default ServiceTwo;