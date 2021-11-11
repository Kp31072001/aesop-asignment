import React from 'react'
import './Footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    return (
        <div className="footer">
            <div className="up">
                <div className="left">
                    <input className="email" type="text" placeholder="Email Address" />
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <span className="link"> privacy policy</span></p>
                        
                    </div>
                </div>
                <div className="c1">
                    <h1>Orders and Support</h1>
                    <hr />
                    <p>
                        <span>Contact Us</span>
                    <span>FAQ's</span>
                    <span>Shipping</span>
                    <span>Returns</span>
                    <span>Terms and Conditions</span>
                    </p>
                    
                </div>
                <div className="c2">
                    <h1>Services</h1>
                    <hr />
                    <p>
                    <span>Live assistence</span>
                    <span>Corporate gifts</span>
                    <span>Facial appointments</span></p>
                </div>
                <div className="right">
                    <h1>Local prefecences</h1>
                    <hr /><p>
                    <span>Shipping: <span className="link">Hong Kong(S.A.R.)</span></span>
                    <span>Language: <span className="link">English</span></span></p>
                </div>
            </div>
            <div className="down">
                <div className="left">
                    <h1>Sustainability</h1>
                    <hr />
                    <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
                <div className="c1">
                    <h1>About</h1>
                    <hr /><p>
                    <span>Our story</span>
                    <span>Foundation</span>
                    <span>Career</span>
                    <span>Privacy policy</span>
                    <span>Accessibility</span></p>
                </div>
                <div className="c2">
                    <h1>Social media</h1>
                    <hr /><p>
                    <span>Instagram</span>
                    <span>Twitter</span>
                    <span>LinkedIn</span>
                    <span>WeChat</span>
                    <span>Weibo</span></p>
                </div>
                <div className="right">
                    
                </div>
            </div>
            <hr />
            <h2><CopyrightIcon/>Aesop</h2>
        </div>
    )
}

export default Footer
