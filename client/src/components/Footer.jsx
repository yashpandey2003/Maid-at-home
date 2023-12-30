import React from "react";
import "./footer.css"

const Footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <>
            <footer>
                <a href="https://www.linkedin.com/in/yash-pandey7/" className="contacts">@YashPandey {year}</a>
            </footer>
        </>

    );

}

export default Footer;
