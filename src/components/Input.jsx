export default function Input({label, name, type, value, minLength, required, onChange}) {
    return (
        <div>
              <label>{label}</label>
              <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                minLength={minLength}
                required={required}
              />
            </div>
    )
}