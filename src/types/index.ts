export type Level = "beginner" | "intermediate" | "advanced";

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    photo: File | null;
    age: number;
    level: Level;
}

export interface Errors {
    [key: string]: string;
}
