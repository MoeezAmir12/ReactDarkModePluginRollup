Note: This library is for React with Tailwind css projects

#using React Dark Mode Plugin in your project:

1: Install the library in your React + Tailwind Project.

2: Go to Tailwind.config.js and add property darkMode: 'class' in the object exported (module.exports).

3: Now in your tailwind classes add dark: and type your required styling for dark mode Example:className="flex bg-blue-200 dark:bg-blue-800", these will be applied automatically if you are already in default dark mode, you can check the switch toggle component on UI from this library, if you turn off the dark mode, classes after dark: will no longer be applicable.

4: Import it in your file by import DarkModePlugin from 'reactdarkmodeplugin';