


 import React, { useState } from "react";
import Step1 from "./componets/step1";
import Step2 from "./componets/step2";
import Step3 from "./componets/step3";
import Navbar from './componets/navbar'
import "./App.css";


const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error for the specific field
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedExtensions = ["pdf", "doc", "docx"];
    const fileExtension = file?.name.split(".").pop().toLowerCase();

    if (file && allowedExtensions.includes(fileExtension)) {
      setFormData({ ...formData, file });
      setErrors({ ...errors, file: "" });
    } else {
      setFormData({ ...formData, file: null });
      setErrors({
        ...errors,
        file: "Only PDF, DOC, and DOCX files are allowed.",
      });
    }
  };

  // Validate each step before proceeding
  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.gender) newErrors.gender = "Gender is required.";
      if (!formData.dob) newErrors.dob = "Date of birth is required.";
    }

    if (currentStep === 2) {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email address.";
      }

      if (!formData.mobile.trim()) {
        newErrors.mobile = "Mobile number is required.";
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = "Enter a valid 10-digit mobile number.";
      }
    }

    if (currentStep === 3) {
      if (!formData.file) {
        newErrors.file = "File upload is required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle "Next" button click
  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Handle "Previous" button click
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  // Handle "Submit" button click
  const handleSubmit = () => {
    if (validateStep()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            handleFileChange={handleFileChange}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  // Calculate progress bar width
  const getProgress = () => {
    return ((currentStep - 1) / 2) * 100; // Adjust progress dynamically
  };

  return (
    <div className="main">
      <Navbar />
      <div className="form-container">
        <h1>Multi-Step Form</h1>

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${getProgress()}%` }}
          ></div>
        </div>

        {renderStep()}

        <div className="navigation-buttons">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="btn"
          >
            Previous
          </button>
          {currentStep < 3 && (
            <button onClick={handleNext} className="btn">
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button onClick={handleSubmit} className="btn">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
