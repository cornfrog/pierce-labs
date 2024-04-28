export default function About() {
    return (
        <div className="about-page">
            <h1 className="about-page__header">About</h1>
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
                </div>
            </div>
            <div className="contact-section">
                <img src="logo.png" alt="logo" className="contact-section__img" />
                <h1 className="contact-section__title">Elevate Your Business with Us</h1>
                <a href="/about" className="contact-section__btn">Get In Touch</a>
            </div>
        </div>
    );
}