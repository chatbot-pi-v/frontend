type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  readOnly?: boolean;
};

export const InputDash = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  readOnly = false,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full border px-2 py-1 border-ash rounded-sm ${
          readOnly ? "bg-gray-100 text-gray-600" : ""
        }`}
      />
    </div>
  );
};
