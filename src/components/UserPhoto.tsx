import { FormData } from "../types";
import { useState } from "react";

interface UserPhotoProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    photo: File | null;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const UserPhoto = ({ handleChange, photo, setFormData }: UserPhotoProps) => {
    const [isDraggingOver, setIsDraggingOver] = useState(false);

    const handleFileDelete = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.preventDefault();
        setFormData((prevFormData) => ({ ...prevFormData, photo: null }));
    };

    const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDraggingOver(true);
    };

    const handleDragLeave = () => {
        setIsDraggingOver(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDraggingOver(false);

        const files = e.dataTransfer.files;
        setFormData((prevFormData) => ({
            ...prevFormData,
            photo: files?.[0] || null,
        }));
    };

    return (
        <div className="flex flex-col gap-2">
            <span>Photo</span>

            <label
                htmlFor="photo"
                className={`flex flex-col items-center justify-center w-full h-24 cursor-pointer  bg-very-light-gray rounded-lg hover:bg-very-light-purple transition-colors ${
                    isDraggingOver &&
                    "border-2 border-dashed border-very-dark-purple"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {photo ? (
                    <div className="flex items-center gap-4">
                        <p>{photo.name}</p>

                        <div
                            className="w-5 h-5 bg-deleteIcon hover:bg-deleteIconRed"
                            onClick={handleFileDelete}
                        ></div>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <span className="text-very-dark-purple underline ">
                            Upload a file
                        </span>
                        <span className="hidden lg:block text-dark-gray">
                            or drag and drop here
                        </span>
                    </div>
                )}
                <input
                    name="photo"
                    id="photo"
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default UserPhoto;
