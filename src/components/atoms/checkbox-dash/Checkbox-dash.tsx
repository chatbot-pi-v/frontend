import { Check } from "lucide-react";

type PermissionCheckboxProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (checked: boolean, value: string) => void;
};

export const PermissionCheckbox = ({
  label,
  value,
  checked,
  onChange,
}: PermissionCheckboxProps) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <div
        className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-colors ${
          checked ? "bg-green-600 border-green-600" : "border-gray-400"
        }`}
        onClick={() => onChange(!checked, value)}
      >
        {checked && <Check className="w-4 h-4 text-white" />}
      </div>
      <span>{label}</span>
    </label>
  );
};
