import React, { useEffect, useState } from 'react';
import { IoSunny, IoMoon } from "react-icons/io5";
import { Switch } from '@mui/material';
import './index.css';

interface IDarkModePlugin {
  containerClassName?: string;
    sunClassName?: string;
    moonClassName?: string;
}

const DarkModePlugin = (props:IDarkModePlugin) => {
  const [darkMode,setDarkMode] = useState<boolean>(false);
  

  const handleDarkModeTrigger = (toggleChecked: boolean) => {
    if(toggleChecked === true)
      {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      }
      else
      {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
  }

  useEffect(()=>{
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    {
      console.log('here');
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  },[])
  return (
    <div data-testid="DarkModePlugin_Container" className={props.containerClassName ? props.containerClassName : "flex flex-row w-fit h-fit gap-1 p-[0.4rem] items-center rounded-full border-2 shadow-md shadow-gray-500 border-indigo-400 dark:bg-slate-700 dark:shadow-gray-700 dark:border-indigo-700 bg-slate-200"}>
    <IoSunny
     className={props.sunClassName ? props.sunClassName : 'text-[#f5b027] !text-[1.4rem] hover:transform rounded-full drop-shadow-lg bg-none text-shadow-[10rem] shadow-slate-600 dark:text-[#f8f5eee0] dark:shadow-none dark:!text-[1.1rem] dark:hover:rotate-12'}
    />
     <Switch
     size='small'
     checked={darkMode}
      onChange={(e:{
        target:{
          checked:boolean;
        }
      })=> {
        handleDarkModeTrigger(e.target.checked);
      }}
     />
     <IoMoon
     className={props.moonClassName ? props.moonClassName : '!text-[1.1rem] text-[#e4cbf4ce] hover:transform hover:rotate-[20deg] dark:text-[#844aad] dark:rotate-[20deg] dark:!text-[1.4rem]'}
     />
    </div>
  );
}

export default DarkModePlugin;
