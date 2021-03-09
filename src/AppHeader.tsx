import React, {MouseEventHandler} from 'react';
//import logo from './logo.svg';
import './App.css';

const header_onclick: MouseEventHandler<HTMLHeadingElement> = (e)=>{
    const x = e.clientX
    const y = e.clientY
    console.log({x,y})
}

export function AppHeader(){
    return (
        <h2 className={"navbar navbar-expand-lg navbar-light bg-light"} color={"yellow"} onClick={header_onclick}>
            Rishav's App
        </h2>
    );
}