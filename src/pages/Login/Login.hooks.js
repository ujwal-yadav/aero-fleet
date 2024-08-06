import { useState } from 'react';
import { useAuth } from '../../context/AuthProvider';

export const useLogin = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password123');
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const { logIn } = useAuth();

  const validateField = (name, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !value,
    }));

    return !value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    }
    if (name === 'password') {
      setPassword(value);
    }

    validateField(name, value);
  };

  const handleLogin = () => {
    const usernameError = validateField('username', username);
    const passwordError = validateField('password', password);

    if (!usernameError && !passwordError) {
      logIn({ username, password });
    }
  };

  return {
    username,
    password,
    errors,
    validateField,
    handleChange,
    handleLogin,
  };
};
