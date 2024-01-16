import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setFormErrors({
        ...formErrors,
        [name]: "This field is required.",
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    const { email } = formData;
    if (email && !validateEmail(email)) {
      setFormErrors({
        ...formErrors,
        email: "Invalid email address.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "email", "message"];
    const newFormErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newFormErrors[field] = "This field is required.";
      }
    });

    if (formData.email && !validateEmail(formData.email)) {
      newFormErrors.email = "Invalid email address.";
    }

    if (Object.keys(newFormErrors).length === 0) {
      console.log("Form Data:", formData);
    } else {
      setFormErrors(newFormErrors);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            required
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {formErrors.message && (
            <span className="error">{formErrors.message}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
