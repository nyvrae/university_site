import React from "react";
import { contactsContent } from "../contactsContent";
import MyMap from "./Map";


const Content = () => {
    return (
        <section className="main flex-center">
            <div className="main__wrapper wrapper--my">
                <h2 className="wwtitle--bold">{contactsContent.title}</h2>

                <MyMap />

                <address className="address" aria-label="address">
                    {contactsContent.address.map((item, index) => (
                        <span key={index} className="block">{item}</span>
                    ))}
                </address>
            </div>
        </section>
    );
};

export default Content;
