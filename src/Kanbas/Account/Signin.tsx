import {Link} from "react-router-dom";

export default function Signin() {
    return (
        <div id={"wd-signin-screen"}>
            <h3>Sign in</h3>
            <input id={"wd-username"} className="form-control mb-2" placeholder={"username"}/>
            <input id={"wd-password"} className="form-control mb-2" placeholder={"password"} type={"password"}/>
            <Link to="/Kanbas/Dashboard" className="btn btn-primary w-100 mb-2"
                  id={"wd-signin-link"}>Sign in</Link><br/>
            <Link to={"/Kanbas/Account/Signup"} className="btn btn-primary w-100 mb-2"
                  id={"wd-signup-link"}>Sign up</Link>
        </div>
    )
}