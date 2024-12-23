
const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2> Contact Information</h2>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Mobile:</label>
<input
  type="text"
  name="mobile"
  value={formData.mobile}
  onChange={(e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      handleChange(e);
    }
  }}
  placeholder="Enter your mobile number"
/>
{errors.mobile && <p className="error">{errors.mobile}</p>}

    </div>
  );
};

export default Step2;
