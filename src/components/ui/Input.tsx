import type { InputProps } from '../../types/input';

function Input({ type, name, value, onChange, placeholder, className, label, error }: InputProps) {
    return (
        <>
        <label htmlFor={name}>{label}</label>
        <input 
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            className={className}
        />
        {error && <span className="error">{error}</span>}
        </>
    );
}

export default Input;