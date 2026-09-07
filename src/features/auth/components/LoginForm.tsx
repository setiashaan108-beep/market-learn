import { useState, useEffect } from 'react';
import Input from '../../../components/ui/Input';
import './Login.css';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const rolesRedirect = {
    'learner': '/app',
    'admin': '/admin',
    'instructor': '/instructor',    
}

function LoginForm() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const { loading, error, login, isAuthenticated, user } = useAuth();

    useEffect(() => {
        if (isAuthenticated && user) {
            const redirectUrl = rolesRedirect[user.role] || '/';
            navigate(redirectUrl);
        }
    }, [isAuthenticated, user]);

    // Function to validate form fields and return if form is valid or not
    function validateForm(name: string) {

        if(name === 'email') {
            if(!form.email) {
                setErrors(prev => ({...prev, email: 'Email is required'}));
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
                setErrors(prev => ({...prev, email: 'Invalid email address'}));
            } else {
                setErrors(prev => ({...prev, email: ''}));
            }
        }

        if(name === 'password') {
            if(!form.password) {
                setErrors(prev => ({...prev, password: 'Password is required'}));
            } else if(form.password.length < 6) {
                setErrors(prev => ({...prev, password: 'Password must be at least 6 characters'}));
            } else {
                setErrors(prev => ({...prev, password: ''}));
            }
        } 
    }
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}));

        validateForm(name);
    }

    const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateForm('email');
        validateForm('password');

        const isFormValid = !errors.email && !errors.password && form.email && form.password;
        if(isFormValid) {
            login(form);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
                <Input 
                    type="email" 
                    name="email" 
                    className='form-control' 
                    value={form.email}
                    onChange={handleChange} 
                    onBlur={handleChange}
                    label="Email"
                    error={errors.email}
                />
            </div>
            <div className="form-group">
                <Input 
                    type="password" 
                    name="password" 
                    className='form-control' 
                    value={form.password}
                    onChange={handleChange} 
                    label="Password"
                    error={errors.password}
                />
            </div>
            <button className="btn btn-primary login-submit" disabled={loading}>
                { loading ? 'Loading....' : 'Submit'}
            </button>
            { error && <div className="error">{error}</div> }
        </form>
    )
}

export default LoginForm;