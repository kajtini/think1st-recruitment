import { Level } from "../types";

interface UserLevelCheckboxProps {
    id: string;
    value: string;
    label: string;
    name: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedLevel: Level;
}

const UserLevelCheckbox = ({
    id,
    value,
    label,
    name,
    handleChange,
    selectedLevel,
}: UserLevelCheckboxProps) => {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                checked={selectedLevel === value}
                name={name}
                className="appearance-none bg-very-light-gray w-5 h-5 rounded-full checked:ring-2 checked:ring-very-dark-purple checked:after:absolute  checked:after:bg-very-dark-purple checked:after:rounded-full checked:after:w-3 checked:after:h-3 checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 relative hover:bg-very-light-purple hover:border-very-dark-purple hover:border transition-all cursor-pointer"
                type="checkbox"
                id={id}
                value={value}
                onChange={handleChange}
            />
            <span>{label}</span>
        </label>
    );
};

export default UserLevelCheckbox;
