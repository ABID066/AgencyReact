import React from 'react';
import logo from "../../assets/logo.svg"
import {Facebook, Githubb, Instragram, Twitter, Xbox} from "../svg/svg.jsx";
import {FooterIcon, FooterItem} from "../common/FooterItem.jsx";


const Footer = () => {

    const footerData = [
        {
            title: "Company",
            list: ["About", "Careers", "Brand Center", "Blog"]
        },{
            title: "Help center",
            list: ["Discord Server", "Twitter", "Facebook", "Contact Us"]
        },{
            title: "Legal",
            list: ["Privacy Policy", "Licensing", "Terms"]
        },{
            title: "Company",
            list: ["About", "Careers", "Brand Center", "Blog"]
        },{
            title: "Download",
            list: ["iOS", "Android", "Windows", "MacOS"]
        }
    ]

    const iconData = [
        {icon: <Facebook/>},
        {icon: <Instragram/>},
        {icon: <Twitter/>},
        {icon: <Githubb/>},
        {icon: <Xbox/>}
    ]


    return (
        <div>
            <footer className="bg-white dark:bg-gray-800">
                <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">

                    <FooterItem ItemFooter={footerData}/>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>


                    <div className="text-center">
                        <a href="#"
                           className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Learn with Sumit Logo"/>Learn
                            with Sumit </a>
                        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025 Learn with Sumit. All Rights Reserved. Built with <a
                            href="#" target="_blank"
                            className="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a> and <a
                            href="#"
                            className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
                        </span>
                        <FooterIcon IconList={iconData}/>
                    </div>
                </div>
            </footer>
        </div>
    )}

export default Footer;