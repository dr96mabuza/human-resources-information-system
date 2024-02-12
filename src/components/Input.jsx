export default function Input({
  label,
  name,
  type,
  value,
  minLength,
  required,
  onChange,
  span,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        minLength={minLength}
        required={required}
      />
      <span>{span}</span>
    </div>
  );
}
