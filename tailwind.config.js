/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "gradient-start": "#F8D696",
                "gradient-middle": "#EA8AF2",
                "gradient-end": "#A972EE",

                "dark-gray": "#898DA9",
                "very-dark-blue": "#000853",
                "very-light-gray": "#FAF9FA",
                "very-light-purple": "#EEDFFF",
                "very-dark-purple": "#761BE4",
                "very-dark-purple-darker": "#6A19CD",
                "light-red": "#F8D3D3",
                "dark-red": "#ED4545",
            },

            fontFamily: {
                primary: ["Inter", "sans-serif"],
            },

            backgroundImage: {
                deleteIcon: "url('./assets/deleteIcon.png')",
                deleteIconRed: "url('./assets/deleteIconRed.png')",
            },
        },
    },
    plugins: [],
};
