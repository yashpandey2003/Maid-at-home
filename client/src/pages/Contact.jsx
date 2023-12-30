import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });
    const [userData, setUserData] = useState(true);
    const {user} = useAuth();
    if(userData && user){
        setContact({
            username: user.username,
            email:user.email,
            message:"",
        });

        setUserData(false);
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(`http://localhost:5000/api/form/contact`, {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(contact),
            });
            if(response.ok){
                const res_data = await response.json();
                console.log("res from server", res_data);

                setContact({
                    message:"",
                });
                toast.success("Message send successfully");
            }


        }
        catch(error){
            console.log("contact", error);

        }
    };


    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>
                {/* contact page main  */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/contact.png" alt="we are always ready to help" />
                    </div>

                    {/* contact form content actual  */}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="6"
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>

                <section className="mb-3">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.3487866377322!2d81.86016417517378!3d25.49341177752137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca78818ddc51%3A0x6690dd2de3a1415b!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1703694439145!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </section>
            </section>
        </>
    );
};


export default Contact