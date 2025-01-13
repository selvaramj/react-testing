import React from "react";

const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h6>Section form</h6>
      <p data-testid="para">All the fields are mandatory</p>
      <form action="">
        <img
          src="https://placehold.co/80x80"
          alt="dummy-image"
          title="dummy image"
        />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter your first name"
          />
        </div>
        <div>
          <label htmlFor="name1">Last name</label>
          <input
            type="text"
            id="name1"
            name="name1"
            placeholder="enter your last name"
            value="jayakumar"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
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
      {/* <section>
        <button role="checkbox" aria-checked="true">
          Sugar
        </button>
        <button role="checkbox" aria-checked="false">
          Gummy bears
        </button>
        <button role="checkbox" aria-checked="false">
          Whipped cream
        </button>
      </section> */}
    </>
  );
};

export default Application;
