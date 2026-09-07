import { useState } from 'react';
import Input from '../../../components/ui/Input';
import './Login.css';
import { login } from '../api/auth.api';


function LoginForm() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    // Function to validate form fields and return if form is valid or not
    function validateForm(name: string) {
        let isValid = true;

        if(name === 'email') {
            console.log('Validating email:', form.email);
            if(!form.email) {
                setErrors(prev => ({...prev, email: 'Email is required'}));
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
                setErrors(prev => ({...prev, email: 'Invalid email address'}));
            } else {
                setErrors(prev => ({...prev, email: ''}));
            }
        }

        if(name === 'password') {
            console.log('errors1:', errors);
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
            try {
            const response = await login(form);
            console.log('Login successful:', response);
            } catch (error) {
                console.error('Login failed:', error);
            }
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
            <button className="btn btn-primary login-submit">
                Submit
            </button>
        </form>
    )
}

export default LoginForm;