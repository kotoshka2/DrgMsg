import {useState} from "react";
import axios, {AxiosError} from "axios";
export default function LoginForm() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

            axios.post("http://26.254.224.223:7022/api/usersauth/login", {
                UserName: login,
                Password: password
            })
                .then((response) => {
                    console.log(response)
                    sessionStorage.setItem('token', response.data.token)
                }).catch(function (error){
                    if (error.response.status === 400){
                        alert("ты лох")
                    }
            });

        }

    return (
        <div className={'Log'}>
            <h1 className={'pa'}>Login</h1>
            <form method={'post'} onSubmit={handleSubmit}>
                    <input className={'Input'} type="text" placeholder={"Login"} onChange={e => setLogin(e.target.value)}/>
                    <input className={'Input'} type="text" placeholder={"Password"} onChange={e => setPassword(e.target.value)}/>
                    <button className={'LogButton'} type="submit">Login</button>
            </form>
            <div>

            </div>

        </div>

    )
}