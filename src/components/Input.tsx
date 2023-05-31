import errorIcon from "../assets/errorIcon.png";
import { Errors } from "../types";

interface InputProps {
    label: string;
    type: string;
    name: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    errors: Errors;
}

const Input = ({
    label,
    type,
    name,
    handleChange,
    value,
    errors,
}: InputProps) => {
    const hasAnError = !!errors[name];

    return (
        <div>
            <label className="flex flex-col gap-2 w-full">
                {label}

                <input
                    className={`h-12 rounded-lg px-4  focus:outline-none  transition-colors ${
                        hasAnError
                            ? "bg-light-red border-2 border-dark-red focus:border-dark-red hover:bg-light-red"
                            : "focus:border-very-dark-purple focus:border-2 hover:bg-very-light-purple"
                    }`}
                    name={name}
                    type={type}
                    placeholder=""
                    onChange={handleChange}
                    value={value}
                    required
                />
            </label>

            {hasAnError && (
                <div className="flex items-center gap-2 mt-2">
                    <img src={errorIcon} />
                    <span>{errors[name]}</span>
                </div>
            )}
        </div>
    );
};

export default Input;
