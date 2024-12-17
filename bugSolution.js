```javascript
// Solution showing corrected Tailwind CSS class application
/* tailwind.config.js (Ensure content and purge are correctly configured) */
module.exports = {
  content: [ "./src/**/*.{html,js}" ],
  theme: {
    extend: {},
  },
  plugins: [],
}

div {
  /* Ensure no conflicting styles */
  @apply bg-red-500;
}
```