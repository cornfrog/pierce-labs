export default function ServicesAndPricing() {
    return (
        <div className="sandp">
            <h1 className="sandp__title">Services and Pricing</h1>
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
            </div>
            <a href="#pricing-plans" className="sandp__plans">See Price Plans</a>
            <div id="pricing-plans" className="pricing-plans">
                <h1 className="pricing-plans__title">Pricing Plans</h1>
                <p className="pricing-plans__info">
                    At Pierce Labs, we offer flexible pricing
                    plans tailored to your needs. Choose the
                    plan that best suits your business goals
                    and budget.
                </p>
                <div className="pricing-plans__list">
                    <div className="pricing-plans__list__tile">
                        <p className="pricing-plans__list__tile__title">Basic Plan</p>
                        <p className="pricing-plans__list__tile__price">$250</p>
                        <p className="pricing-plans__list__tile__target">Perfect for Static Page</p>
                        <p className="pricing-plans__list__tile__message">Get started with a simple static page to establish your online presence.</p>
                        <p className="pricing-plans__list__tile__duration">Duration: 3-4 Business Days</p>
                        <a href="/contact" className="pricing-plans__list__tile__link">Get In Touch</a>
                        <div className="pricing-plans__list__tile__divider"></div>
                        <div className="pricing-plans__list__tile__includes">
                            <p className="pricing-plans__list__tile__includes__item">5 page website</p>
                            <p className="pricing-plans__list__tile__includes__item">Basic design customization</p>
                            <p className="pricing-plans__list__tile__includes__item">Contact form integration</p>
                        </div>
                    </div>
                    <div className="pricing-plans__list__tile">
                        <p className="pricing-plans__list__tile__title advanced">Advanced Plan</p>
                        <p className="pricing-plans__list__tile__price">$650</p>
                        <p className="pricing-plans__list__tile__target">Ideal for Brochure Site</p>
                        <p className="pricing-plans__list__tile__message">Upgrade to a comprehensive brochure site to showcase your products or services.</p>
                        <p className="pricing-plans__list__tile__duration">Duration: 5-8 Business Days</p>
                        <a href="/contact" className="pricing-plans__list__tile__link">Get In Touch</a>
                        <div className="pricing-plans__list__tile__divider"></div>
                        <div className="pricing-plans__list__tile__includes">
                            <p className="pricing-plans__list__tile__includes__item">10 pages website</p>
                            <p className="pricing-plans__list__tile__includes__item">Advanced design customization</p>
                            <p className="pricing-plans__list__tile__includes__item">Basic SEO optimization</p>
                            <p className="pricing-plans__list__tile__includes__item">Contact form integration</p>
                            <p className="pricing-plans__list__tile__includes__item">Image gallery</p>
                        </div>
                    </div>
                    <div className="pricing-plans__list__tile">
                        <p className="pricing-plans__list__tile__title">Tailored Plan</p>
                        <p className="pricing-plans__list__tile__price">$850</p>
                        <p className="pricing-plans__list__tile__target">Tailored to Your E-Commerce Needs</p>
                        <p className="pricing-plans__list__tile__message">Customize your e-commerce platform to meet your specific business requirements.</p>
                        <p className="pricing-plans__list__tile__duration">Duration: 2-3 Weeks</p>
                        <a href="/contact" className="pricing-plans__list__tile__link">Get In Touch</a>
                        <div className="pricing-plans__list__tile__divider"></div>
                        <div className="pricing-plans__list__tile__includes">
                            <p className="pricing-plans__list__tile__includes__item">Custom e-commerce website</p>
                            <p className="pricing-plans__list__tile__includes__item">Unlimited product listings</p>
                            <p className="pricing-plans__list__tile__includes__item">Advanced SEO optimization</p>
                            <p className="pricing-plans__list__tile__includes__item">Payment gateway integration</p>
                            <p className="pricing-plans__list__tile__includes__item">Shopping cart functionality</p>
                            <p className="pricing-plans__list__tile__includes__item">Customer account management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}