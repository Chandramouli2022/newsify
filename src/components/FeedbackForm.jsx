import { useState } from "react";
import "../styles/FeedbackForm.css";
import InputLabel from "./InputLabel";
import { useContext } from "react";
import { FeedContext } from "../context/FeedTheme";

const FeedbackForm = () => {
  const {feed, toggle} = useContext(FeedContext)
  return (
    <div className={`feedback-overlay ${feed ? "show" : ""}`} onClick={toggle}>
      <div className="feedback-form" onClick={(e) => e.stopPropagation()}>
        <div className='feedback-form-container'>
          <form action='#'>
            <h2 className='form-heading'>Thank you so much for taking the time!</h2>
            <p className='form-description'>Please provide the below details!</p>
            <InputLabel htmlFor='fb-name' type='text' placeholder='Enter Your Full Name'>Full Name</InputLabel>
            <InputLabel htmlFor='fb-address' placeholder='Enter your full Postal Address' isTextArea={true}>Address</InputLabel>
            <div className='country-state-div'>
              <InputLabel htmlFor='fb-country' type='text' placeholder='Enter Your Country Name'>Country</InputLabel>
              <InputLabel htmlFor='fb-state' type='text' placeholder='Enter Your State Name'>State</InputLabel>
            </div>
            <div className='email-phone-div'>
              <InputLabel htmlFor='fb-email' type='text' placeholder='Enter Your Email'>Email Id</InputLabel>
              <InputLabel htmlFor='fb-mobile' type='text' placeholder='Enter Your Mobile Number'>Mobile Number</InputLabel>
            </div>
            <InputLabel htmlFor='fb-feedback' placeholder='Write Your Feedback' isTextArea={true}>Description</InputLabel>
             <div><button className="submit-fb">Submit Feedback</button></div>
          </form>

        </div>
      </div>
      <div className="fb-cover"></div>
    </div>
  );
};

export default FeedbackForm;