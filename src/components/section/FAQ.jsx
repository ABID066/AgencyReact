import React from 'react';
import {FAQText, HeadLine} from "../common/Text.jsx";
import AccordionItem from "../common/AccordionItem.jsx";
import ListItem from "../common/ListItem.jsx";

const listItem = [
    "Landwind Pro",
    "Tailwind UI"
]

const faqData = [
    {
        question: "Can I use Landwind in open-source projects?",
        answer: (
            <>
                <FAQText Text="Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                    dropdowns, modals, navbars, and more."/>
                <FAQText Text={{
                    before: "Check out this guide to learn how to ",
                    linkText: "get started",
                    linkHref: "#",
                    after: " and start developing websites even faster with components on top of Tailwind CSS.",
                }}/>
            </>
        )
    },
    {
        question: "Is there a Figma file available?",
        answer: (
            <>
                <FAQText Text="Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design
                    equivalent in our Figma file."/>
                <FAQText Text={{
                    before: "Check out the ",
                    linkText: "Figma design system",
                    linkHref: "#",
                    after: " based on the utility classes from Tailwind CSS and components from Landwind.",
                }}/>
            </>
        )
    },
    {
        question: "What are the differences between Landwind and Tailwind UI?",
        answer: (
            <>
                <FAQText Text="The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a
                    paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers
                    sections of pages."/>
                <FAQText Text="However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds."/>
                <FAQText Text="Learn more about these technologies:"/>
                <ListItem itemList={listItem} />
            </>
        )
    },
    {
        question: "What about browser support?",
        answer: (
            <>
                <FAQText Text="The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a
                    paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers
                    sections of pages."/>
                <FAQText Text="However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds."/>
                <FAQText Text="Learn more about these technologies:"/>

                <ListItem itemList={listItem} />
            </>
        )
    },
];

const Faq = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
                <div className="text-center mb-8">
                    <HeadLine Text="Frequently asked questions" />
                </div>
                <div className="max-w-screen-md mx-auto" id="accordion-flush">
                    {faqData.map((item, index) => (
                        <AccordionItem key={index} index={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
