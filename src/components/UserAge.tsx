import { useEffect, useRef } from "react";

interface UserAgeProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    age: number;
}

const UserAge = ({ handleChange, age }: UserAgeProps) => {
    const ageRef = useRef<HTMLInputElement>(null);
    const ageTooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ageRef.current && ageTooltipRef.current) {
            const val = +ageRef.current.value;
            const min = +ageRef.current.min;
            const max = +ageRef.current.max;
            const newVal = ((val - min) * 100) / (max - min);

            ageTooltipRef.current.style.left = `${newVal}%`;
        }
    }, [age]);

    return (
        <label className="flex flex-col gap-2 relative mb-6">
            Age
            <div>
                <div className="flex items-center justify-between">
                    <span className="text-center text-xs">0</span>
                    <span className="text-center text-xs">100</span>
                </div>
                <div className="relative">
                    <input
                        ref={ageRef}
                        name="age"
                        className="appearance-none rounded-full h-1 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-very-dark-purple cursor-pointer w-full"
                        id="age"
                        type="range"
                        min="0"
                        max="100"
                        required
                        value={age}
                        onChange={handleChange}
                    />
                    <div
                        ref={ageTooltipRef}
                        className="absolute -translate-x-1/2 mt-1  w-9 h-6 border-very-dark-purple border bg-very-light-gray rounded-md flex items-center justify-center text-xs text-very-dark-purple"
                    >
                        <span>{age}</span>
                    </div>
                </div>
            </div>
        </label>
    );
};

export default UserAge;
