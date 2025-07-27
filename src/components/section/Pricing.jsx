import React from 'react';
import DetailsText, {HeadLine} from "../common/Text.jsx";

import PriceCard from "../common/PriceCard.jsx";

const Pricing = () => {

    const priceCardItem = [
        {
            title:"Starter",
            description: "Best option for personal use & for your next project.",
            price: 29,
            teamSize: "1 developer",
            support:"6 months",
        },
        {
            title:"Company",
            description: "Relevant for multiple users, extended & premium support.",
            price: 99,
            teamSize: "10 developer",
            support:"24 months",
        },
        {
            title:"Enterprise",
            description: "Best for large scale uses and extended redistribution rights.",
            price: 499,
            teamSize: "100+ developer",
            support:"36 months",
        }
    ]

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <HeadLine Text="Designed for business teams like yours"/>
                        <DetailsText Text="Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."/>
                    </div>
                    <PriceCard itemList={priceCardItem}/>
                </div>
            </section>
        </div>
    );
};

export default Pricing;