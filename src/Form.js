import React, { useState } from 'react';
import './App.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (!formData.email) {
      errors.email = 'Please enter an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.name) {
      errors.name = 'Please enter your name.';
    }

    if (!formData.password) {
      errors.password = 'Please enter a password.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password.';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <div className='inputs'>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        {formErrors.email && <div>{formErrors.email}</div>}
      </div>
      <div className='inputs'>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        {formErrors.name && <div>{formErrors.name}</div>}
      </div>
      <div className='inputs'>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        {formErrors.password && <div>{formErrors.password}</div>}
      </div>
      <div className='inputs'> 
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
        {formErrors.confirmPassword && <div>{formErrors.confirmPassword}</div>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default SignUpForm;
