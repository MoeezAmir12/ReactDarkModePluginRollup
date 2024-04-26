import React, { useState, useEffect } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import { Switch } from '@mui/material';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.flex{display:flex}.h-fit{height:-moz-fit-content;height:fit-content}.w-fit{width:-moz-fit-content;width:fit-content}.flex-row{flex-direction:row}.items-center{align-items:center}.gap-1{gap:.25rem}.rounded-full{border-radius:9999px}.border-2{border-width:2px}.border-indigo-400{--tw-border-opacity:1;border-color:rgb(129 140 248/var(--tw-border-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.bg-none{background-image:none}.p-\\[0\\.4rem\\]{padding:.4rem}.\\!text-\\[1\\.1rem\\]{font-size:1.1rem!important}.\\!text-\\[1\\.4rem\\]{font-size:1.4rem!important}.text-\\[\\#e4cbf4ce\\]{color:#e4cbf4ce}.text-\\[\\#f5b027\\]{--tw-text-opacity:1;color:rgb(245 176 39/var(--tw-text-opacity))}.shadow-md{--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-gray-500{--tw-shadow-color:#6b7280;--tw-shadow:var(--tw-shadow-colored)}.shadow-slate-600{--tw-shadow-color:#475569;--tw-shadow:var(--tw-shadow-colored)}.drop-shadow-lg{--tw-drop-shadow:drop-shadow(0 10px 8px #0000000a) drop-shadow(0 4px 3px #0000001a);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.text-shadow-\\[10rem\\]{text-shadow:10rem}.hover\\:rotate-\\[20deg\\]:hover{--tw-rotate:20deg}.dark\\:rotate-\\[20deg\\]:is(.dark *),.hover\\:rotate-\\[20deg\\]:hover,.hover\\:transform:hover{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.dark\\:rotate-\\[20deg\\]:is(.dark *){--tw-rotate:20deg}.dark\\:border-indigo-700:is(.dark *){--tw-border-opacity:1;border-color:rgb(67 56 202/var(--tw-border-opacity))}.dark\\:bg-slate-700:is(.dark *){--tw-bg-opacity:1;background-color:rgb(51 65 85/var(--tw-bg-opacity))}.dark\\:\\!text-\\[1\\.1rem\\]:is(.dark *){font-size:1.1rem!important}.dark\\:\\!text-\\[1\\.4rem\\]:is(.dark *){font-size:1.4rem!important}.dark\\:text-\\[\\#844aad\\]:is(.dark *){--tw-text-opacity:1;color:rgb(132 74 173/var(--tw-text-opacity))}.dark\\:text-\\[\\#f8f5eee0\\]:is(.dark *){color:#f8f5eee0}.dark\\:shadow-none:is(.dark *){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dark\\:shadow-gray-700:is(.dark *){--tw-shadow-color:#374151;--tw-shadow:var(--tw-shadow-colored)}.dark\\:hover\\:rotate-12:hover:is(.dark *){--tw-rotate:12deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}";
styleInject(css_248z,{"insertAt":"top"});

const DarkModePlugin = (props) => {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkModeTrigger = (toggleChecked) => {
        if (toggleChecked === true) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
        else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    };
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('here');
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    }, []);
    return (React.createElement("div", { "data-testid": "DarkModePlugin_Container", className: props.containerClassName ? props.containerClassName : "flex flex-row w-fit h-fit gap-1 p-[0.4rem] items-center rounded-full border-2 shadow-md shadow-gray-500 border-indigo-400 dark:bg-slate-700 dark:shadow-gray-700 dark:border-indigo-700 bg-slate-200" },
        React.createElement(IoSunny, { className: props.sunClassName ? props.sunClassName : 'text-[#f5b027] !text-[1.4rem] hover:transform rounded-full drop-shadow-lg bg-none text-shadow-[10rem] shadow-slate-600 dark:text-[#f8f5eee0] dark:shadow-none dark:!text-[1.1rem] dark:hover:rotate-12' }),
        React.createElement(Switch, { size: 'small', checked: darkMode, onChange: (e) => {
                handleDarkModeTrigger(e.target.checked);
            } }),
        React.createElement(IoMoon, { className: props.moonClassName ? props.moonClassName : '!text-[1.1rem] text-[#e4cbf4ce] hover:transform hover:rotate-[20deg] dark:text-[#844aad] dark:rotate-[20deg] dark:!text-[1.4rem]' })));
};

export { DarkModePlugin as default };
