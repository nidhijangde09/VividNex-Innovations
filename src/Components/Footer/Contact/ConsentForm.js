import React, { useState } from "react";
import "./ConsentForm.css";

export default function ConsentForm() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checked) {
      setError(true);
    } else {
      setError(false);
      alert("Submitted!");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="consent-box">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>
          I agree to the use or processing of my personal information by
          Accenture for the purpose of fulfilling this request and in
          accordance with Accenture’s Privacy Statement
        </span>
      </label>

      {error && <p className="error-text">This field is required and must not be blank.</p>}

      <div className="captcha-box">
        {/* Replace with actual Google reCAPTCHA */}
        <div className="dummy-captcha">
          <input type="checkbox" /> I'm not a robot
        </div>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}
