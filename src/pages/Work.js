import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import WorkContainer from '../container/Work/WorkContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import AboutFive from '../container/About/AboutFive';
// import BrandContainer from '../container/Brand/BrandContainer';
// import Faq from '../container/Faq/Faq';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const Work = () => {
    return (
        <React.Fragment>
            <SEO title="BP Tech - Projects" />
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-two.jpg"
                title="Our success comes from the trust of our customers"
                content="Home"
                contentTwo="Projects"
            />
            <WorkContainer />
            <CallToAction />
            <AboutFive />
            {/* 
            <BrandContainer classOption="section-padding-bottom" />
            <Faq />
            */}
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Work;