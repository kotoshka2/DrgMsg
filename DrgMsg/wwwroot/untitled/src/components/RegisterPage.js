import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
export default function RegisterForm() {
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://26.254.224.223:7022/api/user/register ", {
            UserName: login,
            Password: password,
            Email: email,
            Role: 'user'
        })
            .then((response) => {
                console.log(response)
                Navigate("/")
            }).catch(function (error){
            if (error.response.status === 400){
                alert("ты лох")
            }
        });

    }

    return (
        <div className={'Log'}>
            <h1 className={"pa"}>SingUp</h1>
            <form method={'post'} onSubmit={handleSubmit}>
                <input className={'Input'} type="text" placeholder={"Email"} onChange={e => setEmail(e.target.value)}/>
                <input className={'Input'} type="text" placeholder={"Login"} onChange={e => setLogin(e.target.value)}/>
                <input className={'Input'} type="text" placeholder={"Password"} onChange={e => setPassword(e.target.value)}/>
                <button className={'LogButton'} type="submit">SignUp</button>
            </form>
            <div>

            </div>

        </div>

    )
}