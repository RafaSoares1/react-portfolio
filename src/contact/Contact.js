import React from 'react';
import '../styles/contact.css'; // Assuming you have a CSS file named ContactPage.css

const ContactPage = () => {

    // You can replace the '#' with your actual URLs or email
    const linkedInUrl = "https://www.linkedin.com/in/rafael-vieira12/";
    const gitHubUrl = "https://github.com/RafaSoares1";
    const cvDownloadLink = "https://drive.google.com/file/d/1ljz0QaquTlopwURFJ-eL3G4-qAliru9T/view?usp=sharing"; // Link to your CV for download
    const emailAddress = "ersv12@gmail.com";

    return (
        <div className="contact-container">
            <a href={cvDownloadLink} target="_blank" rel="noopener noreferrer" className="contact-box cv">
                CV
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="contact-box linkedin">
                LinkedIn
            </a>
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="contact-box github">
                GitHub
            </a>
            <div className="contact-box email">
                <span>{emailAddress}</span>
            </div>
        </div>
    );
}

export default ContactPage;