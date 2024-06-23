import React from 'react';
import axios from 'axios';
import GoogleButton from 'react-google-button'

const GoogleLoginButton = () => {

  const handleLogin = () => {
    axios.get('http://127.0.0.1:8080/google_login')
      .then(response => {
        window.location.href = response.data.url;
      })
      .catch(error => {
        console.error('Error fetching Google login URL:', error);
      });
  };

  return (
    <GoogleButton 
        type="light"
        onClick={handleLogin}>
            Login with Google
    </GoogleButton>
  );
};

export default GoogleLoginButton;