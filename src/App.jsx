
import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    course: "",
    department: "",
    address: "",
    qualification: ""
  });

  const [photo, setPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const filledFields = Object.values(formData).filter(
    (value) => value.trim() !== ""
  ).length;

  const progress = Math.round((filledFields / 9) * 100);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      course: "",
      department: "",
      address: "",
      qualification: ""
    });
    setPhoto(null);
    setSubmitted(false);
  };

  return (
    <div className="page">

      {/* Header */}
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">🎓</div>
          <div>
            <h2>EduPortal</h2>
            <span>Student Admission System</span>
          </div>
        </div>

        <div className="nav-right">
          <span>Admissions Open 2026</span>
          <div className="online-dot"></div>
        </div>
      </header>

      {/* Main Section */}
      <main className="main-content">

        <section className="welcome-section">
          <span className="tag">WELCOME TO EDU PORTAL</span>
          <h1>Begin Your Journey<br />
            <span>With Us.</span>
          </h1>
          <p>
            Take the first step towards your future.
            Complete the registration form to begin your
            academic journey with us.
          </p>

          <div className="benefits">
            <div>✓ Easy Online Registration</div>
            <div>✓ Multiple Courses Available</div>
            <div>✓ Student Friendly Portal</div>
          </div>

          <div className="welcome-art">
            <span>📚</span>
            <span>💻</span>
            <span>🏆</span>
          </div>
        </section>

        <section className="form-card">

          {!submitted ? (
            <>
              <div className="form-heading">
                <div>
                  <span className="small-heading">ADMISSION FORM</span>
                  <h2>Student Registration</h2>
                  <p>Please provide your details below.</p>
                </div>
                <div className="form-icon">📝</div>
              </div>

              {/* Progress */}
              <div className="progress-info">
                <span>Form Completion</span>
                <strong>{progress}%</strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: `${progress}%` }}></div>
              </div>

              <form onSubmit={handleSubmit}>

                {/* Photo Upload */}
                <div className="photo-section">
                  <div className="photo-preview">
                    {photo ? (
                      <img src={photo} alt="Student profile" />
                    ) : (
                      <span>👤</span>
                    )}
                  </div>

                  <div className="photo-details">
                    <strong>Profile Photo</strong>
                    <p>Upload your recent photograph</p>
                    <label className="upload-btn">
                      Choose Photo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhoto}
                      />
                    </label>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="section-title">
                  <span>01</span>
                  <h3>Personal Information</h3>
                </div>

                <div className="form-grid">

                  <div className="field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="10 digit mobile number"
                      pattern="[0-9]{10}"
                      title="Enter a 10-digit phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Date of Birth *</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Previous Qualification *</label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select qualification</option>
                      <option>10th Standard</option>
                      <option>12th Standard</option>
                      <option>Diploma</option>
                      <option>Undergraduate</option>
                      <option>Postgraduate</option>
                    </select>
                  </div>

                </div>

                {/* Academic Details */}
                <div className="section-title">
                  <span>02</span>
                  <h3>Academic Information</h3>
                </div>

                <div className="form-grid">

                  <div className="field">
                    <label>Course *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select course</option>
                      <option>B.E / B.Tech</option>
                      <option>B.Sc</option>
                      <option>B.Com</option>
                      <option>BBA</option>
                      <option>BCA</option>
                      <option>MBA</option>
                      <option>MCA</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Department *</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select department</option>
                      <option>Computer Science</option>
                      <option>Information Technology</option>
                      <option>Electronics</option>
                      <option>Mechanical</option>
                      <option>Civil</option>
                      <option>Commerce</option>
                      <option>Management</option>
                    </select>
                  </div>

                </div>

                {/* Address */}
                <div className="section-title">
                  <span>03</span>
                  <h3>Contact Information</h3>
                </div>

                <div className="field">
                  <label>Residential Address *</label>
                  <textarea
                    name="address"
                    placeholder="Enter your complete address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="form-actions">
                  <button
                    type="button"
                    className="reset-btn"
                    onClick={handleReset}
                  >
                    Reset Form
                  </button>

                  <button type="submit" className="submit-btn">
                    Submit Registration →
                  </button>
                </div>

                <p className="privacy-note">
                  🔒 Your information is used for registration purposes.
                </p>

              </form>
            </>
          ) : (
            <div className="success-screen">
              <div className="success-icon">✓</div>
              <span className="small-heading">REGISTRATION COMPLETED</span>
              <h2>Congratulations!</h2>
              <p>
                Thank you, <strong>{formData.name}</strong>.
                Your registration form has been submitted successfully.
              </p>

              <div className="summary">
                <h3>Registration Details</h3>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Course:</strong> {formData.course}</p>
                <p><strong>Department:</strong> {formData.department}</p>
              </div>

              <button className="submit-btn" onClick={handleReset}>
                Register Another Student
              </button>
            </div>
          )}

        </section>
      </main>

      <footer>
        © 2026 EduPortal | Student Admission System
        <br />
        Designed with React
      </footer>

    </div>
  );
}

export default App;

