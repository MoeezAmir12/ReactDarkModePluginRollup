
# React DarkMode Plugin

This is a react dark mode plugin which can be used in any project using tailwindcss to enable dark mode


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Screenshots

Component Light Mode:

![App Screenshot](https://github.com/MoeezAmir12/ReactDarkModePluginRollup/blob/main/Screenshot%202024-04-26%20223615.png)

Component Dark Mode:

![App Screenshot](https://github.com/MoeezAmir12/ReactDarkModePluginRollup/blob/main/Screenshot%202024-04-26%20223648.png)




## Installation

1: Install the library in your React + Tailwind Project.

```bash
  npm install reactdarkmodeplugin
```

2: Go to Tailwind.config.js and add property darkMode: 'class' in the object exported (module.exports).

```bash
  const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },},
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ]
}

```

3: Now in your tailwind classes add dark: and type your required styling for dark mode, these will be applied automatically if you are already in default dark mode, you can check the switch toggle component on UI from this library, if you turn off the dark mode, classes of dark: will no longer be applicable. Example:

```bash
  <div data-testid="DarkModePlugin_Container" className="flex flex-row w-fit h-fit gap-1 p-[0.4rem] items-center rounded-full border-2 shadow-md shadow-gray-500 border-indigo-400 dark:bg-slate-700 dark:shadow-gray-700 dark:border-indigo-700 bg-slate-200">
```

4: Import and use without props for default styling coming from component itself:

```bash
  import DarkModePlugin from 'reactdarkmodeplugin';

  <DarkModePlugin/>
```

5: Use with props for custom styling using tailwindcss:

```bash
  <DarkModePlugin
   containerClassName='bg-blue-500'
   sunClassName='text-[1rem] text-yellow-200'
   moonClassName='text-[1rem] text-purple-300'
  />
```

## Features

- Light/dark mode toggle
- Default mode apply from browser
- Dark class for custom css to be used for dark mode 


## Demo

Insert gif or link to demo

https://github.com/MoeezAmir12/ReactDarkModePluginRollup/blob/main/src/Desktop2024.04.27-00.52.37.04-ezgif.com-crop.gif
## Authors

- [@MoeezAmir12](https://github.com/MoeezAmir12)

