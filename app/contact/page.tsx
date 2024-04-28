"use client"

import { useState } from "react";

export default function Contact() {

    const [errors, errorMessages] = useState<any>({
        nameError: "",
        emailError: "",
        subjectError: ""
    });

    const [popup, setPopUpProperties] = useState<any>({
        display: false,
        message: ""
    }); 

    async function submitContactMessage(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const responseFromContactAPIRoute = await fetch("/api/contact", {
            method: "POST",
            body: formData
        });
        const responseData = await responseFromContactAPIRoute.json();
        if (responseFromContactAPIRoute.status !== 200) {
            if(responseData.message) {
                alert(responseData.message);
                setPopUpProperties({
                    display: true,
                    message: responseData.message
                })
            } else {
                errorMessages(responseData.errors);
            }
        } else { 
            setPopUpProperties({
                display: true,
                message: responseData.message
            })
            clearForm();
        }
    }

    function clearForm() {
        const contactFormElement = document.getElementById("contact-form") as HTMLFormElement;
        if (contactFormElement) {
            contactFormElement.reset();
        }
    }

    async function closePopUp() {
        setPopUpProperties({
            display: false,
            message: ""
        })
    }

    return (
        <div className="contact-page">
            <h1 className="contact-page__header">Contact </h1>
            <form onSubmit={submitContactMessage} className="contact-page__form" id="contact-form">
                <h2 className="contact-page__form__title">Drop a Message, We will Reach Out ASAP</h2>
                <div className="contact-page__form__inputs">
                    <div className="contact-page__form__inputs__left-section">
                        {errors.nameError !== "" ? <p className="contact-page__form__inputs__left-section__error">&#x26A0; {errors.nameError}</p> : ""}
                        <input type="text" name="name" className={errors.nameError === "" ? "contact-page__form__inputs__left-section__input" : "contact-page__form__inputs__left-section__input error"} placeholder="Name" />
                        {errors.nameError !== "" ? <p className="contact-page__form__inputs__left-section__error">&#x26A0; {errors.emailError}</p> : ""}
                        <input type="text" name="email" className={errors.emailError === "" ? "contact-page__form__inputs__left-section__input" : "contact-page__form__inputs__left-section__input error"} placeholder="Email" />
                        {errors.nameError !== "" ? <p className="contact-page__form__inputs__left-section__error">&#x26A0; {errors.subjectError}</p> : ""}
                        <input type="text" name="subject" className={errors.subjectError === "" ? "contact-page__form__inputs__left-section__input" : "contact-page__form__inputs__left-section__input error"} placeholder="Subject" />
                    </div>
                    <textarea name="message" id="form-message" className="contact-page__form__inputs__message" rows={10} placeholder="Briefly outline your website or software vision"></textarea>
                </div>
                <input type="submit" value="Send Message" className="contact-page__form__submit" />
            </form>
            <div className={popup.display ? "contact-page__popup" : "pop-up-hide"}>
                <h1 className="contact-page__popup__message">{popup.message}</h1>
                <button className="contact-page__popup__close-btn" onClick={closePopUp}>Close</button>
            </div>
        </div>
    );
}