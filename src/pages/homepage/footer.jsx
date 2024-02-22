// Footer.jsx

import React from 'react';

const Footer = () => {
    const footerStyle = {
        height : '12rem'
    };
    return (
        <>
        <hr />
            <footer className=' bg-transparent d-flex flex-column justify-content-center' style={footerStyle}>
                <div className='icons mb-3 d-flex justify-content-center'>
                <i className="fa-brands fa-facebook fa-2xl"  style={{color: "#3c75d7",}} />
                <i className="mx-3 fa-brands fa-instagram  fa-2xl" style={{color: "#fb139b",}} />
                <i className="fa-brands fa-twitter  fa-2xl" style={{color: "#4b99ec",}} />
              
                </div>
                <div className='content fw-semibold  text-center'>
                    <p className='m-0'>Ride . Share . Connect</p>
                    <p className='m-0'>Terms of use . Privacy Policy</p>
                    <h6 className='m-1'>&copy; 2008 Clarify Money</h6>
                </div>
            </footer>
        </>
    );
}

export default Footer;
