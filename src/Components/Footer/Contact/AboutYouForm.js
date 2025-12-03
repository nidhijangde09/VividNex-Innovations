import React from "react";
import "./AboutYouForm.css";

const AboutYouForm = () => {
    return (
        <div className="form-container">
            <h2>About You</h2>

            <div className="form-group">
                <label>First name*</label>
                <input type="text" placeholder="Enter first name" />
            </div>

            <div className="form-group">
                <label>Last name*</label>
                <input type="text" placeholder="Enter last name" />
            </div>

            <div className="form-group">
                <label>Email address*</label>
                <input type="email" placeholder="Enter email address" />
            </div>


            <div className="form-group">
                <label>Phone Number*</label>
                <input type="text" placeholder="Enter Phone Number" />
            </div>

            <div className="form-group">
                <label>Company/Organization*</label>
                <input type="Text" placeholder="Enter Company/Organization " />
            </div>
            <div className="form-group">
                <label>Your role/function*</label>
                <input type="Text" placeholder="Enter Your role/function" />
            </div>

                  <div className="form-group">
                <label>How can we help you?*</label>
                <input type="Text" placeholder="" />
            </div>
        </div>

    );
};

export default AboutYouForm;
