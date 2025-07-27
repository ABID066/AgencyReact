import Header from "./components/section/Header.jsx";
import Hero from "./components/section/Hero.jsx";
import CompanyLogo from "./components/section/CompanyLogo.jsx";
import ServiceOne from "./components/section/ServiceOne.jsx";
import ServiceTwo from "./components/section/ServiceTwo.jsx";
import Testimonial from "./components/section/Testimonial.jsx";
import Pricing from "./components/section/Pricing.jsx";
import FAQ from "./components/section/FAQ.jsx";
import Trial from "./components/section/Trial.jsx";
import Footer from "./components/section/Footer.jsx";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <CompanyLogo/>
            <ServiceOne/>
            <ServiceTwo/>
            <Testimonial/>
            <Pricing/>
            <FAQ/>
            <Trial/>
            <Footer/>
        </div>
    );
};

export default App;