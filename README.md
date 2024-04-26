npm package link: https://www.npmjs.com/package/reactdarkmodeplugin


Note: This library is for React with Tailwind css projects using ROllup

#using React Dark Mode Plugin in your project:

1: Install the library in your React + Tailwind Project.

2: Go to Tailwind.config.js and add property darkMode: 'class' in the object exported (module.exports).

3: Now in your tailwind classes add dark: and type your required styling for dark mode Example:className="flex bg-blue-200 dark:bg-blue-800", these will be applied automatically if you are already in default dark mode, you can check the switch toggle component on UI from this library, if you turn off the dark mode, classes after dark: will no longer be applicable.

4: Import it in your file by import DarkModePlugin from 'reactdarkmodeplugin';

5: Use it in your project by using default styles of the component, if you want to give customized styles use props:
   
   . containerClassName: use this prop and provide custom styles for container of the component

   . sunClassName: use this prop and provide customm styles for light mode or sun icon used in the component

   . moonClassName: use this prop and provide customm styles for dark mode or moon icon used in the component    

