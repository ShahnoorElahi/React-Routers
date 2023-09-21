import React from "react";
import { render } from '@testing-library/react';
export default class Form extends React.Component{
    constructor(){
        super()
        this.state={
            User: null,
            Password: null
        }
    }

submit(){
    console.warn(this.state)
}
render(){
    return(
        <div>
            <h1>D</h1>
        </div>
    );
}
}