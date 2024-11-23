import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./reducer";
import * as client from "./client";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        const user = await client.signin(credentials);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
    };
    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>
            <input defaultValue={credentials.username}
                   onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                   id="wd-username"
                   placeholder="username"
                   className="form-control mb-2"/><br/>
            <input defaultValue={credentials.password}
                   onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                   id="wd-password"
                   placeholder="password" type="password"
                   className="form-control mb-2"/><br/>
            <button onClick={signin}
                    id="wd-signin-btn"
                    className="btn btn-primary w-100 mb-2">
                Sign in
            </button>
            <br/>
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup"
                  className="btn btn-primary w-100">Sign up</Link>
        </div>
    );
}
