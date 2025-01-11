import React from "react";

const Application = () => {
  return (
    <form action="">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="job-location">Job Location</label>
        <select id="job-location">
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="UK">United kingdom</option>
          <option value="CA">Canada</option>
          <option value="IN">India</option>
          <option value="AU">Australia</option>
        </select>
      </div>
      <div>
        <input type="checkbox" id="check-box" />
        <label htmlFor="check-box">I agree to terms and conditions</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Application;
