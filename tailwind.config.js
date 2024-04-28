const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#333333",
      gray: "#666666",
      blue: "#2F6DF2",
      green: "#019607",
      lightGray: "#8D95A8",
      borderColor: "#EAEAEA",
      magenta: "#D2D2F9"
    },
    fontFamily: {
      'sfProRegular': ['SFProDisplay-Regular', 'sans-serif'],
      'sfProSemiBold': ['SFProDisplay-Semibold', 'sans-serif'],
      'sfProThin': ['SFProDisplay-Thin', 'sans-serif'],
      'latoBold': ['Lato-Bold', 'sans-serif'],
      'helvetica': ['Helvetica', 'sans-serif'],
    },

    extend: {
      spacing: {
        '50': '12.5rem',
        '120': '7.5rem',
        '138' : '8.625rem',
      },
      boxShadow: {
        "menu": "0 2px 2px rgba(84, 84, 84, 0.25)"
      },
      fontSize: {
        '8xl': ["6.25rem", { lineHeight: '6.875rem' }],
        '7.5xl': ["4.75rem", { lineHeight: '4.75rem' }],
        '5xl': ["3rem", { lineHeight: '3.75rem' }],
        'lg': ["1.125rem", { lineHeight: '1.75rem' }],
        'middle' : "2rem",
        'xxs': "0.625rem",
      },
      backgroundImage: {
        'remix-ide-desktop' : "url(\"../src/assets/images/remix-ide-desktop.svg\"), linear-gradient(76.65deg, rgba(45, 97, 210, 0.15) -0.16%, rgba(43, 85, 183, 0.15) 51.45%, rgba(177, 152, 255, 0.15) 71.71%, rgba(255, 134, 227, 0.15) 99.04%)",
        'remix-ide-mobile' : "linear-gradient(76.65deg, rgba(45, 97, 210, 0.15) -0.16%, rgba(43, 85, 183, 0.15) 51.45%, rgba(177, 152, 255, 0.15) 71.71%, rgba(255, 134, 227, 0.15) 99.04%)",
        'plugins-desktop' : "url('../src/assets/images/plugins-desktop.svg')",
        'libraries-desktop' : "url(\"../src/assets/images/libraries-desktop-bck.svg\"), linear-gradient(76.65deg, rgba(45, 97, 210, 0.15) -0.16%, rgba(43, 85, 183, 0.15) 51.45%, rgba(177, 152, 255, 0.15) 71.71%, rgba(255, 134, 227, 0.15) 99.04%)",
        'rewards-desktop-bck' : "url('../src/assets/images/rewards-desktop-bck.svg')",
        'team-desktop' : "url(\"../src/assets/images/team-desktop-bck.svg\"), linear-gradient(76.65deg, rgba(45, 97, 210, 0.15) -0.16%, rgba(43, 85, 183, 0.15) 51.45%, rgba(177, 152, 255, 0.15) 71.71%, rgba(255, 134, 227, 0.15) 99.04%)",
        'team-mobile' : "linear-gradient(76.65deg, rgba(45, 97, 210, 0.15) -0.16%, rgba(43, 85, 183, 0.15) 51.45%, rgba(177, 152, 255, 0.15) 71.71%, rgba(255, 134, 227, 0.15) 99.04%)",

      },
      backgroundPosition: {
        'remix-desktop-background-position': '80% 8%',
        'plugins-background-position': '105% 10%',
        'libraries-background-position': '-36% 60%',
        'libraries-background-position-lg': '-18% 60%',
        'rewards-background-position': '-8% 50%',
        'rewards-background-position-lg': '8% 50%',
        'team-background-position': '70% 5%',
      },
      gridTemplateColumns: {
        'footer': '1.3fr repeat(3, 0.6fr) 1fr'
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [
      plugin(function({addUtilities}){
        addUtilities({
              '.scrollbar-hide': {
                /* IE and Edge */
                '-ms-overflow-style': 'none',

                /* Firefox */
                'scrollbar-width': 'none',

                /* Safari and Chrome */
                '&::-webkit-scrollbar': {
                  display: 'none'
                }
              }
            }
        )
      })
  ],
};
