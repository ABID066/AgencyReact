import React from 'react';
import img2 from '../../assets/features/feature-2.png'
import img1 from '../../assets/features/feature-1.png'
import DetailsText, {HeadLine} from "../common/Text.jsx";
import CheckList from "../common/CheckList.jsx";

const ServiceOne = () => {

    const Feature1 = [
        "Continuous integration and deployment",
        "Development workflow",
        "Knowledge management"
    ]

    const Feature2 = [
        "Dynamic reports and dashboards",
        "Templates for everyone",
        "Development workflow" ,
        "Limitless business automation" ,
        "Knowledge management"
    ]



    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">


                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <HeadLine Text="Work with tools you already use"/>
                            <DetailsText Text="Deliver great service experiences fast - without the complexity of traditional ITSM
                                solutions. Accelerate critical development work, eliminate toil, and deploy changes with
                                ease."/>

                            <CheckList itemList={Feature1}/>

                            <DetailsText Text="Deliver great service experiences fast - without
                                the complexity of traditional ITSM solutions."/>
                        </div>
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                             src={img1} alt="dashboard feature image"/>
                    </div>


                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                             src={img2} alt="feature image 2"/>
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <HeadLine Text="We invest in the world’s potential"/>
                            <DetailsText Text="Deliver great service experiences fast - without the complexity of traditional ITSM
                                solutions. Accelerate critical development work, eliminate toil, and deploy changes with
                                ease."/>
                            <CheckList itemList={Feature2}/>
                            <DetailsText Text="Deliver great service experiences fast - without the
                                complexity of traditional ITSM solutions."/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceOne;