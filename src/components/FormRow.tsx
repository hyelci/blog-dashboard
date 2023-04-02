interface FormRowProps {
  type: string;
  name: string;
  visibleLabel?: string;
  value?: number | string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  visibleLabel,
}: FormRowProps): JSX.Element => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {visibleLabel || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
