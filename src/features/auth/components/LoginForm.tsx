import { useState, useEffect } from 'react';
import Input from '../../../components/ui/Input';
import './Login.css';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const rolesRedirect = {
  learner: '/app',
  admin: '/admin',
  instructor: '/instructor',
};

function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const { loading, error, login, isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user) {
      const redirectUrl = rolesRedirect[user.role] || '/';
      navigate(redirectUrl);
    }
  }, [isAuthenticated, user, navigate]);

  // Function to validate form fields and return if form is valid or not
  function validateField(name: string, value: string) {
    if (name === 'email') {
      if (!value) {
        return 'Email is required';
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return 'Invalid email address';
      }
    }

    if (name === 'password') {
      if (!value) {
        return 'Password is required';
      }

      if (value.length < 6) {
        return 'Password must be at least 6 characters';
      }
    }

    return '';
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  function validateForm(form: { email: string; password: string }) {
    return {
      email: validateField('email', form.email),
      password: validateField('password', form.password),
    };
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    const isValid = !validationErrors.email && !validationErrors.password;

    if (!isValid) {
      return;
    }

    login(form);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <Input
          type="email"
          name="email"
          className="form-control"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email"
          error={errors.email}
        />
      </div>
      <div className="form-group">
        <Input
          type="password"
          name="password"
          className="form-control"
          value={form.password}
          onChange={handleChange}
          label="Password"
          error={errors.password}
        />
      </div>
      <button className="btn btn-primary login-submit" disabled={loading}>
        {loading ? 'Loading....' : 'Submit'}
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default LoginForm;
