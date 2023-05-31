import { Level } from "../types";
import UserLevelCheckbox from "./UserLevelCheckbox";

interface UserLevelProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedLevel: Level;
}

const UserLevel = ({ handleChange, selectedLevel }: UserLevelProps) => {
    return (
        <div className="flex flex-col gap-2">
            <p>Level</p>

            <UserLevelCheckbox
                name="level"
                id="beginner"
                label="Beginner"
                value="beginner"
                handleChange={handleChange}
                selectedLevel={selectedLevel}
            />
            <UserLevelCheckbox
                name="level"
                id="intermediate"
                label="Intermediate"
                value="intermediate"
                handleChange={handleChange}
                selectedLevel={selectedLevel}
            />
            <UserLevelCheckbox
                name="level"
                id="advanced"
                label="Advanced"
                value="advanced"
                handleChange={handleChange}
                selectedLevel={selectedLevel}
            />
        </div>
    );
};

export default UserLevel;
