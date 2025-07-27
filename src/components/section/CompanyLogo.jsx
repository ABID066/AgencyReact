import React from 'react';
import {
    Airbnb,
    Facebook,
    Githubb,
    Google,
    Instragram,
    Mailchimp,
    Mashable,
    Microsoft,
    Spotify,
    Twitter, Xbox
} from "../svg/svg.jsx";
import CompanyLogoItem from "../common/CompanyLogoItem.jsx";


export default function CompanyLogo () {

    const iconData = [
        {icon: <Airbnb/>},
        {icon: <Google/>},
        {icon: <Microsoft/>},
        {icon:  <Spotify/>},
        {icon:  <Mailchimp/>},
        {icon:  <Mashable/>}
    ]

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                    <CompanyLogoItem Icon={iconData}/>
                </div>
            </section>
        </div>
    );
};