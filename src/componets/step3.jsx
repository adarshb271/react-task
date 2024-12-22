
import React from "react";

const Step3 = ({ formData, handleFileChange, errors }) => {
  return (
    <div>
      <h2>Upload File</h2>
      <label>Upload File (PDF/DOC/DOCX):</label>
      <input
        type="file"
        name="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      {errors.file && <p className="error">{errors.file}</p>}

      {formData.file && (
        <div className="file-preview">
          <p>Selected File: {formData.file.name}</p>
        </div>
      )}
    </div>
  );
};

export default Step3;


