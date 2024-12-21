window.tailwind = {
  config: {
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#1B4332',
            hover: '#163727',
            light: '#2D6A4F',
            dark: '#051209'
          },
          secondary: {
            DEFAULT: '#40916C',
            hover: '#2D6A4F',
            light: '#52B788',
            dark: '#1B4332'
          },
          accent: {
            DEFAULT: '#95D5B2',
            light: '#F1F8F4',
            hover: '#74C69D',
            dark: '#FFFFFF'
          },
          forest: {
            DEFAULT: '#081C15',
            light: '#0D251C',
            hover: '#132F24'
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
        }
      }
    }
  }
}
