import {Link} from "react-router-dom";

export default function Signin() {
    return (
        <div id={"wd-signin-screen"}>
            <h3>Sign in</h3>
            <input id={"wd-username"} placeholder={"username"}/><br/>
            <input id={"wd-password"} placeholder={"password"} type={"password"}/><br/>
            <Link to={"/Kanbas/Account/Profile"}
                  id={"wd-signin-btn"}>Sign in</Link><br/>
            <Link to={"/Kanbas/Account/Signup"}
                  id={"wd-signup-link"}>Sign up</Link>
        </div>
    )
}