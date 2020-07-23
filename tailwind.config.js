/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'hh-primary': '#50c6db',
        'hh-orange': '#EB662C',
        'hh-black': '#222222'
      },
      fontFamily: {
        sans: ['Nunito', 'Sans-serif'],
        serif: ['Nunito-Sans', 'Sans-serif']
      },
      fontSize: {
        '8xl': '5rem',
        '9xl': '6rem',
        '10xl': '7rem',
        '11xl': '8rem',
        '12xl': '9rem'
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.5rem',
        '14': '4rem',
        '15': '4.5rem',
        '16': '5rem',
        '17': '5.5rem'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
