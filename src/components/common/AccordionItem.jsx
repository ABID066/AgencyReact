import React, { useState } from 'react';
import { Up, Down } from "../svg/svg.jsx";

const AccordionItem = ({ question, answer, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h3 id={`accordion-heading-${index}`}>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700 ${
                        open ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                    }`}
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls={`accordion-body-${index}`}
                >
                    <span>{question}</span>
                    {open ? <Up /> : <Down />}
                </button>
            </h3>
            <div
                id={`accordion-body-${index}`}
                className={open ? '' : 'hidden'}
                aria-labelledby={`accordion-heading-${index}`}
            >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
