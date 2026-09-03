import { useState } from 'react';
import Input from '../../../components/ui/Input';
import './Login.css';


function LoginForm() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});

        if(name === 'email') {
            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                setErrors({...errors, email: 'Invalid email address'});
            } else {
                setErrors({...errors, email: ''});
            }
        }

        if(name === 'password') {
            if(value.length < 6) {
                setErrors({...errors, password: 'Password must be at least 6 characters'});
            } else {
                setErrors({...errors, password: ''});
            }
        } 
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', form);
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
            <button className="btn btn-primary login-submit">Submit</button>
        </form>
    )
}

export default LoginForm;