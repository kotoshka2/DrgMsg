import axios from 'axios';
import './App.css';
import Button from "./Button";
import {useState} from "react";


function App() {


return(
    <div className={'Log'}>
        <h1>Login</h1>
        <input type="text" placeholder={"Login"}/>
        <input type="text" placeholder={"Password"}/>
        <Button></Button>
    </div>
)
}

export default App;
