import CoverImage from "./components/CoverImage";

export default function Home() {
  return (
    <div className="homepage-container">
      <CoverImage />
      <div className="companies-container">
        <h1 className="companies-container__header">Utilize technology used by companies like:</h1>
        <div className="companies-container__list">
          <img src="company-logos/hulu.svg" alt="hulu-logo" className="companies-container__list__logo" />
          <img src="company-logos/uber.svg" alt="uber-logo" className="companies-container__list__logo" />
          <img src="company-logos/tiktok.svg" alt="tiktok-logo" className="companies-container__list__logo" />
          <img src="company-logos/twitch.svg" alt="twitch-logo" className="companies-container__list__logo" />
        </div>
      </div>
      <div className="intro">
        <img src="" alt="photo-here" className="intro__photo" />
        <div className="intro__info">
          <h1 className="intro__info__header">Introducing Pierce Labs: Your Digital Solutions Engineer</h1>
          <p className="intro__info__about">
            Elevate your digital presence effortlessly with Pierce Labs.
            As a burgeoning force in software and website development,
            we specialize in crafting bespoke solutions for businesses
            like yours using Next.js. Dedicated to providing expert
            support, we deliver cutting-edge technology tailored to your
            needs. Seamlessly tailor your platforms to your specifications,
            ensuring they perfectly embody your brand identity.
          </p>
          <a href="/services-and-pricing" className="see-services-btn">See Services</a>
        </div>
      </div>
      <div className="why-us">
        <h1 className="why-us__header">How May We Assist You?</h1>
        <p className="why-us__about">
          Pierce Labs is dedicated to empowering your business with digital solutions that fit your needs and budget.
        </p>
        <div className="why-us__offerings">
          <div className="why-us__offerings__offer">
            <img src="offerings/custom-software.png" alt="custom-software-icon" />
            <h3 className="why-us__offerings__offer__title">Custom Software</h3>
            <p className="why-us__offerings__offer__info">
              We create custom software solutions designed specifically for your business.
              From inventory management systems to customer relationship management (CRM)
              tools, we tailor our solutions to streamline your operations.
            </p>
          </div>
          <div className="why-us__offerings__offer">
            <img src="offerings/personalized-support.png" alt="personalized-support-icon" />
            <h3 className="why-us__offerings__offer__title">Personalized Service</h3>
            <p className="why-us__offerings__offer__info">
              As a startup, we pride ourselves on providing personalized service to every client.
              We take the time to understand your unique needs and tailor our solutions accordingly,
              ensuring you get the most value out of our partnership.
            </p>
          </div>
          <div className="why-us__offerings__offer">
            <img src="offerings/responsive-site-design.png" alt="responsive-site-design-icon" />
            <h3 className="why-us__offerings__offer__title">Responsive Website Design</h3>
            <p className="why-us__offerings__offer__info">
              We specialize in responsive website design, ensuring your site looks great and functions
              smoothly on all devices. Whether you need a simple brochure site or a full-fledged
              e-commerce platform, we've got you covered.
            </p>
          </div>
          <div className="why-us__offerings__offer">
            <img src="offerings/technical-support.png" alt="technical-support-icon" />
            <h3 className="why-us__offerings__offer__title">Technical Support</h3>
            <p className="why-us__offerings__offer__info">
              Our team provides responsive technical support to ensure your software and websites run
              smoothly. From troubleshooting to updates and maintenance, we're here to help whenever
              you need us.
            </p>
          </div>
        </div>
        <a href="/services-and-pricing#pricing-plans" className="why-us__prices">See Price Plans</a>
      </div>
      <div className="contact-section">
        <img src="logo.png" alt="logo" className="contact-section__img"/>
        <h1 className="contact-section__title">Elevate Your Business with Us</h1>
        <a href="/contact" className="contact-section__btn">Get In Touch</a>
      </div>
    </div>
  );
}
