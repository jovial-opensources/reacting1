import React, {createRef} from 'react';
//import logo from './logo.svg';
import './App.css';

export function AppBody(){
    const el_list:string[] = ["one", "two", "three"]
    const element_ref = createRef<HTMLDivElement>()
    const render_element = (
        <div style={{
            textAlign: 'left',
            color: 'royalblue'
        }} ref={element_ref}>
            {
                el_list.map((el)=>{
                    return <h4>{el}</h4>
                })
            }
        </div>
    );
    return render_element
}