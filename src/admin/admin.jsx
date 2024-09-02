import React from 'react';
import './admin.css';

const AdminLoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Use window.location.href for external navigation
    window.location.href = 'https://saggyintoit.github.io/AdminPanel/';
  };

  return (
    <div className="adminpagemain">
      <div className="login-page">
        <div className="text-center mb-4">
          <img
            className="login-logo"
            src="https://businesso.xyz/assets/front/img/6506953ba3468.png"
            alt="Login Logo"
          />
        </div>
        <div className="Admin-form">
          <form
            className="login-form"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_token"
              value="jnJLMvwnx05drjftt2I2uS6b4PF60LDGPY89UTE3"
            />
            <input
              type="text"
              name="username"
              defaultValue="admin"
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              defaultValue="admin"
            />
            <button type="submit">Login</button>
          </form>
          <a className="forget-link" href="https://businesso.xyz/admin/mail-form">
            Forgot Password / Username?
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
