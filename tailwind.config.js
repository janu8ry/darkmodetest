module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.html', './src/**/*.js'],
        options: {
            keyframes: true,
            fontFace: true
        }
    },
    darkMode: 'class',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
      plugins: [],
}
