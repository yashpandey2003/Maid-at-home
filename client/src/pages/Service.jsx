import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {

    const { services } = useAuth();

    return (
        <>
            <section className="section-services">
                <div className="container">
                    <h1 className="main-heading">Available Services</h1>
                </div>
                <div className="container grid grid-three-cols">
                    {
                            services.map((curEle, index) => {
                                const { work, pay, address, _id } = curEle;
                                return (
                                    <div className="card">
                                        <div className="card-img">
                                            <img src="/images/cooking.png" alt="our services" width="200" />
                                        </div>
                                        <div className="card-details">
                                                <h2>{work}</h2>
                                                <p>{pay}</p>
                                                <p>{address}</p>
                                                <p>Experience:- 2+ years</p>
                                                <br/>
                                                <p>Employee ID:- {_id}</p>
                                                
                                            
                                        </div>
                                    </div>
                                );
                            })
                    }
                    
                </div>
            </section>
        </>
    )
}

export default Service;
