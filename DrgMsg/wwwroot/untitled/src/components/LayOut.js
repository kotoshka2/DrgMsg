import {NavLink, Outlet} from "react-router-dom";


 export default function LayOut() {
    return (
        <>
            <header className={"Head"}>
                <NavLink to={"/"}  className={"URL"}>Home</NavLink>
                <NavLink to={"/loginform"} className={"URL"}>SignIn</NavLink>
                <NavLink to={"/registerpage"} className={"URL"}>SignUp</NavLink>
            </header>
            <Outlet />
            <footer className={'foot'}> 2024</footer>
        </>
    )
}

