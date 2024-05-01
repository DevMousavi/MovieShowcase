/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
    darkMode: "class",
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
        },
        screens: {
            at: "200px",
            am: "350px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            boxShadow: {
                primaryShadow: "-1px -1px 8px #607D8B",
            },
            colors: {
                primaryColor: "rgb(124, 58, 237)",
                primaryBackGround: "#030303",
                primaryBackGround_Light: "#183D3D",
            },
        },
    },
    plugins: [],
};
