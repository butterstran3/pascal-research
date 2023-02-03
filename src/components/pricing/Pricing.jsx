import React from "react";
import './pricing.css';

const Pricing = () => {
    return (
        <section className="container pricing_container" id="pricing">
            <div>
                <div className="pricing_title">
                    <h4>Looking to sign up?</h4>
                    <h1>Pricing</h1>
                </div>
                <div className="pricing_options">
                    <article className="pricing_item">
                        <h2>
                            FREE
                        </h2>
                        <h3>
                            Free
                        </h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            <li>Elementum tempus egestas sed sed risus pretium quam</li>
                            <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                            <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                            <li>Ut diam quam nulla porttitor</li>
                        </ul>
                        <div className="sign-up-btn_container">
                            <button className="sign-up_btn">Sign Up</button>
                        </div>
                    </article>
                    <article className="pricing_item">
                        <h2>
                            Standard
                        </h2>
                        <h3>
                            $50 per month
                        </h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            <li>Elementum tempus egestas sed sed risus pretium quam</li>
                            <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                            <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                            <li>Ut diam quam nulla porttitor</li>
                        </ul>
                        <div className="sign-up-btn_container">
                            <button className="sign-up_btn">Sign Up</button>
                        </div>
                    </article>
                    <article className="pricing_item">
                        <h2>
                            Premium
                        </h2>
                        <h3>
                            $100 per month
                        </h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            <li>Elementum tempus egestas sed sed risus pretium quam</li>
                            <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                            <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                            <li>Ut diam quam nulla porttitor</li>
                        </ul>
                        <div className="sign-up-btn_container">
                            <button className="sign-up_btn">Sign Up</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Pricing;