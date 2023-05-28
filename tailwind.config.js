module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'mobile':'375px'
    },
    extend: {
      colors:{
        'my-orange':'hsl(26, 100%, 55%)',
        'Very-dark-blue': 'hsl(220, 13%, 13%)',
        'Dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'Grayish-blue': 'hsl(220, 14%, 75%)',
        'Light-grayish-blue': 'hsl(223, 64%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
        'Black': 'hsl(0, 0%, 0%)',
        'pop-up': 'rgba(0, 0, 0, 0.5)'
      },
      fontFamily:{
        'my-font':['kumbh sans'],
      },
    },
  },
  plugins: [],
}