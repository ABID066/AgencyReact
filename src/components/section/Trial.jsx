import React from 'react';
import  {HeadLine, TrialText} from "../common/Text.jsx";
import Button from "../common/Button.jsx";

const Trial = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div className="max-w-screen-sm mx-auto text-center">
                    <HeadLine Text="Start your free trial today"/>
                    <TrialText Text="Try Landwind Platform for 30 days. No credit card required."/>
                    <Button Text="Free trial for 30 days"/>
                </div>
            </div>
        </section>

    );
};

export default Trial;