
  
import React from "react";

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2> Personal Information</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label>Gender:</label>
      <select
        name="gender"
        value={formData.gender || ""}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select your gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <p className="error">{errors.gender}</p>}

      <label>Date of Birth:</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        placeholder="Select your date of birth"
      />
      {errors.dob && <p className="error">{errors.dob}</p>}
    </div>
  );
};

export default Step1;

