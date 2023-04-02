/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                'glow': '0 0 3px 1px #60B0FF',
              },
        }
    },
    plugins: []
}
