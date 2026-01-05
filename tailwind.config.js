module.exports = {
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        'morningcrunch-sign': {
          'color-scheme': 'light',
          primary: '#FF6B35',
          secondary: '#1E1E1E',
          accent: '#FF6B35',
          neutral: '#1E1E1E',
          'base-100': '#FFFFFF',
          'base-200': '#F5F5F5',
          'base-300': '#E5E5E5',
          'base-content': '#1E1E1E',
          '--rounded-btn': '0.5rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
        }
      }
    ]
  }
}
