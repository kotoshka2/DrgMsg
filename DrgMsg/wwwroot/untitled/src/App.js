import {Routes, Route,} from 'react-router-dom'
import './App.css';
import './components/LogPage.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterPage";
import MainPage from "./components/ChatPage";
import  LayOut from "./components/LayOut";
import HomePage from "./components/HomePage";

function App() {
return(
    <>
    <Routes>
        <Route className={"layout"} path= "/" element={<LayOut/>}>
            <Route index element={<HomePage/>}/>
            <Route path="loginform" element={<LoginForm/>}/>
            <Route path="registerpage" element={<RegisterForm/>}/>
            <Route path="*" element={<MainPage/>}/>
        </Route>
    </Routes>
    </>
)
}



export default App;
