import Hero from "./components/Hero";
import ServiceHighlight from "./components/WearYourStory";
import FeatureCarousel from "./components/FeatureCarousel";
import PortfolioGrid from "./components/PortfolioGrid";
import Timeline from "./components/Timeline";
import Marquee from "./components/Marquee";
import ContactForm from "./components/ContactForm";
import NewsletterSubscribe from "./components/NewsletterSubscribe";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ExtraServices from "./components/ExtraServices";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlight />
      <div id='services'>
        <Services />
      </div>
      <div id='extra-services'>
        <ExtraServices />
      </div>
      <FeatureCarousel />
      {/* <PortfolioGrid /> */}
      <div id='about'>
        <AboutUs />
      </div>
      <Timeline />
      <Testimonials />
      <Marquee />
      <div id='contact'>
        <ContactForm />
      </div>
      {/* <NewsletterSubscribe /> */}
    </>
  );
}
