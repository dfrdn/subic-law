module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Arial', 'ui-sans-serif', 'system-ui', 'arial'],
      header: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
    extend: {
      boxShadow: {
        DEFAULT: '3px 6px 10px rgba(0, 0, 0, 0.16)',
        around: '0px 0px 12px #00000029;',
      },
      container: {
        center: true,
      },
      scale: {
        102: '1.02',
      },
      colors: {
        primary: '#101010',
        secondary: '#606060',
        tertiary: '#B37D4A',
      },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'group-hover'],
      scale: ['hover', 'group-hover'],
      filter: ['group-hover'],
      height: ['group-hover'],
      brightness: ['group-hover'],
      invert: ['group-hover'],
      margin: ['group-hover', 'first', 'last'],
      textAlign: ['group-hover'],
      fontSize: ['group-hover'],
      justifyContent: ['hover'],
      alignItems: ['hover'],
      backgroundColor: ['active', 'focus'],
      pointerEvents: ['hover'],
      borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    },
  },
}
