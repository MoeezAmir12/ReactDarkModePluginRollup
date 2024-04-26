import React from 'react';
import './index.css';
interface IDarkModePlugin {
    containerClassName?: string;
    sunClassName?: string;
    moonClassName?: string;
}
declare const DarkModePlugin: (props: IDarkModePlugin) => React.JSX.Element;
export default DarkModePlugin;
