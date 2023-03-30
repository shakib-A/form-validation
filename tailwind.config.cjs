/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'Lightgrayishviolet': 'hsl(270, 3%, 87%)',
        'Darkgrayishviolet': 'hsl(279, 6%, 55%)',
        'Verydarkviolet':' hsl(278, 68%, 11%)',

        // Gradients
        'gradientFrom': 'hsl(249, 99%, 64%)', //active input border
        'gradientTo': 'hsl(278, 94%, 30%)', 
        'error': 'hsl(0, 100%, 66%)' //input errors
      },
      backgroundImage: {
        'bgcardback': 'url("/assets/bg-card-back.png")',
        'bgcardfront': 'url("/assets/bg-card-front.png")',
      }
    },
  },
  plugins: [],
}
