import {RightArrow} from "../svg/svg.jsx";
import React from "react";

export default function DetailsText({Text}){

    if (typeof Text === "string") {
        return <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{Text}</p>;
    }

    const { before, linkText, linkHref, after } = Text;
    return (
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {before}
            <a href={linkHref} className="hover:underline">
                {linkText}
            </a>
            {after}
        </p>
    );
}

export function HeadLine({Text}) {
    return (
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {Text}
        </h2>
    )
}

export function PurpleText({Text}) {
    return (
        <div>
            <a href="#"
               className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                {Text}
                <RightArrow/>
            </a>
        </div>
    )
}

export function FAQText({Text}) {
    if (typeof Text === "string") {
        return (
            <div className="mb-2 text-gray-500 dark:text-gray-400">
                {Text}
            </div>
        )
    }

    const { before, linkText, linkHref, after } = Text;
    return (
        <p className="text-gray-500 dark:text-gray-400">
            {before}
            <a href={linkHref} className="text-purple-600 dark:text-purple-500 hover:underline">
                {linkText}
            </a>
            {after}
        </p>
    );
}

export function TrialText({Text}) {
    return (
        <div>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                {Text}
            </p>
        </div>
    )
}