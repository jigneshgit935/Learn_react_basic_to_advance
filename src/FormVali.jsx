import React, { useState } from 'react';

const FormValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password should be atleast 6 characters long';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const submitted = {
        name,
        email,
        password,
      };
      setSubmitted(submitted);
      console.log('Form Submitted', submitted);
    }
  };

  return (
    <div>
      <h2>formValidation</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && <span className="error">{error.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.name && <span className="error">{error.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && <span className="error">{error.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name:{submitted.name}</p>
          <p>Email:{submitted.email}</p>
          <p>Password:{submitted.password}</p>
        </div>
      )}
    </div>
  );
};

export default FormValidation;
