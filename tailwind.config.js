/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },
      colors: {
        head: '#2b3452',
        backGradFrom: '#78838D',
        hpLeft: '#28652B',
        hpRight: '#77EC56',
        hpReg: '#286323',
        manaLeft: '#005FD7',
        manaRight: '#68F2FC',
        hpReg: '#286323',
        manaReg: '#1056db',
        black: '#000000',
        grayGradFrom: '#222B38',
        grayGradTo: '#1D2633',
        gold: '#FBB829',
        golden: '#F5A742',
        itemTooltipGradFrom: '#2C363f',
        itemTooltipGradTo: '#232F38',
        matchId: '#A9CF54',
        direWin: '#C23C2A',
        radiantWin: '#92A525',
        evenLine: '#242D34',
        oddLine: '#1F2830',
        onDisplayOddLineRadiant: '#313D38',
        onDisplayEvenLineRadiant: '#2A3638',
        onDisplayOddLineDire: '#373036',
        onDisplayEvenLineDire: '#2D2F38',
        onDisplayLinesHover: '#38424A',
      },
      width: {
        112: '28rem', // or any value you need
      },
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'serif'],
      mono: ['Menlo', 'Monaco', 'Courier', 'monospace'],
      radiance: ['Radiance', 'Noto Sans', 'serif'],
      open: ['Open Sans', 'Noto Sans', 'serif'],
      abril: ['Abril Fatface', 'cursive'],
      lucida: ['Lucida Grande', 'Tahoma', 'Verdana', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
