interface FormRowProps {
  type: string;
  name: string;
  value?: number | string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRow = ({
  type,
  name,
  value,
  handleChange,
}: FormRowProps): JSX.Element => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        className="border-2"
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
