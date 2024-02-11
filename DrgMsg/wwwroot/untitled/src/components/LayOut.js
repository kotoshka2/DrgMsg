import {NavLink, Outlet} from "react-router-dom";


 export default function LayOut() {
    return (
        <>
            <header>
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/loginform"} >SignIn</NavLink>
                <NavLink to={"/registerpage"} >SignUp</NavLink>
            </header>
            <Outlet />
            <footer> 2024</footer>
        </>
    )
}

