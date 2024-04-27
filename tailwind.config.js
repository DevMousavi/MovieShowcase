/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
    theme: {
        fontFamily: {
            Roboto: {
                DEFAULT: "Roboto-Medium",
                RobotoRegular: "Roboto-Regular",
                RobotoBold: "Roboto-Bold",
            },
        },
        container: {
            center: true,
            padding: "2rem",
        },
        screens: {
            am: "350px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {},
    },
    plugins: [],
};
