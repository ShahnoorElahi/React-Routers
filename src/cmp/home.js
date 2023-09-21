import React from "react";
import { render } from '@testing-library/react';
export default class Home extends React.Component{
 
    constructor(){
        super()
        this.state={
            User: null,
            Password: null
        }
    }

submit() {
    console.warn(this.state)
}
render(){
    return(
        <div>
            <h1>B</h1>
        </div>
    );
}
}

