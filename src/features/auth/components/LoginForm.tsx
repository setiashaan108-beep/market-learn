import './Login.css';


function LoginForm() {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className='form-control' />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className='form-control' />
            </div>

            <button className="btn btn-primary login-submit">Submit</button>
        </form>
    )
}

export default LoginForm;