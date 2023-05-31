import Input from "./Input";
import UserAge from "./UserAge";
import UserPhoto from "./UserPhoto";
import UserLevel from "./UserLevel";
import { useState } from "react";
import { Errors, FormData } from "../types";

const MarathonForm = () => {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PHONE_NUMBER_REGEX = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        photo: null,
        age: 0,
        level: "beginner",
    });

    const [errors, setErrors] = useState<Errors>({});

    const errorMessages = {
        email: "Please use correct formatting. Example: name@domain.com",
        phoneNumber: "Please use correct formatting. Example: +48 123 456 789",
    };

    const resetFormData = () =>
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            photo: null,
            age: 0,
            level: "beginner",
        });

    const checkFieldValidity = (
        field: "email" | "phoneNumber",
        regex: RegExp
    ) => {
        if (!regex.test(formData[field])) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: errorMessages[field],
            }));

            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));

            return true;
        }
    };

    const validateForm = () => {
        if (
            checkFieldValidity("email", EMAIL_REGEX) &&
            checkFieldValidity("phoneNumber", PHONE_NUMBER_REGEX)
        ) {
            return true;
        }

        return false;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        if (name === "photo") {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: files?.[0] || null,
            }));

            return;
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === "age" ? +value : value,
        }));
    };

    const handleMarathonFormSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        try {
            e.preventDefault();
            if (validateForm()) {
                await fetch("http://marathon.pl/submit", {
                    method: "POST",
                    body: JSON.stringify(formData),
                });
                resetFormData();
            }
        } catch (err) {
            console.error(`Error while submitting the form: ${err}`);
        }
    };

    return (
        <form
            className="max-w-[734px] w-full"
            onSubmit={handleMarathonFormSubmit}
        >
            <h1 className="text-4xl text-center mb-12 lg:text-5xl">
                Marathon Application Form
            </h1>

            <div className="flex flex-col gap-6 lg:bg-white lg:bg-opacity-20 lg:rounded-2xl lg:p-12 lg:shadow-md lg:grid">
                <div className="lg:grid lg:grid-cols-2 flex flex-col gap-6">
                    <Input
                        label="First Name"
                        name="firstName"
                        type="text"
                        handleChange={handleInputChange}
                        value={formData.firstName}
                        errors={errors}
                    />
                    <Input
                        label="Last Name"
                        name="lastName"
                        type="text"
                        handleChange={handleInputChange}
                        value={formData.lastName}
                        errors={errors}
                    />
                    <Input
                        label="Email Address"
                        name="email"
                        type="text"
                        handleChange={handleInputChange}
                        value={formData.email}
                        errors={errors}
                    />
                    <Input
                        label="Phone Number"
                        name="phoneNumber"
                        type="text"
                        handleChange={handleInputChange}
                        value={formData.phoneNumber}
                        errors={errors}
                    />
                </div>

                <UserPhoto
                    handleChange={handleInputChange}
                    photo={formData.photo}
                    setFormData={setFormData}
                />
                <UserAge handleChange={handleInputChange} age={formData.age} />

                <UserLevel
                    handleChange={handleInputChange}
                    selectedLevel={formData.level}
                />

                <button className="bg-very-dark-purple hover:bg-very-dark-purple-darker text-lg  rounded-md text-white lg:ml-auto lg:px-8 h-[45px] flex items-center justify-center mt-12 transition-colors font-medium">
                    Send Application
                </button>
            </div>
        </form>
    );
};

export default MarathonForm;
