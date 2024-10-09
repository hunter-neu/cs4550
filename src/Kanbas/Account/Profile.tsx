import { Link } from "react-router-dom";
import React from "react";

export default function Profile() {
    return (
        <div id={"wd-profile-screen"}>
            <h3>Profile</h3>
            <input id="wd-username" className="form-control" value="alice" placeholder="username"/><br/>
            <input id="wd-password" className="form-control" value="123" placeholder="password"
                   type="password"/><br/>
            <input id="wd-firstname" className="form-control" value="Alice" placeholder="First Name"/><br/>
            <input id="wd-lastname" className="form-control" value="Wonderland" placeholder="Last Name"/><br/>
            <input id="wd-dob" className="form-control" value="2000-01-01" type="date"/><br/>
            <input id="wd-email" className="form-control" value="alice@wonderland" type="email"/><br/>
            <select id="wd-role" className="form-control">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select><br/>
            <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign out</Link>
        </div>
    )
}