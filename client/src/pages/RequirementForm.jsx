import React, {useState} from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RequirementForm = () => {
    const [need, setNeed] = useState({
        username:"",
        email:"",
        phone:"",
        address:"",
        details:"",
    });
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;


        setNeed({
            ...need,
            [name]:value,
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(need);
        try{
            const response = await fetch("http://localhost:5000/api/info/requirement", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(need),
            })
            const res_data = await response.json();
            console.log("res from server", res_data);
            if(response.ok){
                setNeed({
                    username:"",
                    email:"",
                    phone:"",
                    address:"",
                    details:"",
                })
                toast.success("Requirement registered");
            }
            else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }

        }
        catch(error){
            console.log("requirement", error);

        }
    }
    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-img">
                                <img src="/images/register.png" alt="a girl is trying to register" width="500" height="500" />
                            </div>
                            <div className="registration-form">
                                <h1 className="main=heading mb-3">Requirement form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" placeholder="username" id="username" required autoComplete="off" value={need.username} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" placeholder="enter your email" id="email" required autoComplete="off" value={need.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" name="phone" placeholder="phone" id="phone" required autoComplete="off" value={need.phone} onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="address">Address</label>
                                        <input type="address" name="address" placeholder="address" id="address" required autoComplete="off" value={need.address} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="details">Details</label>
                                        <textarea
                                            name="details"
                                            id="message"
                                            autoComplete="off"
                                            value={need.details}
                                            onChange={handleInput}
                                            required
                                            cols="55"
                                            rows="6"
                                        ></textarea>
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Submit Requirement</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </main>
            </section>
        </>

    );
}


export default RequirementForm;
