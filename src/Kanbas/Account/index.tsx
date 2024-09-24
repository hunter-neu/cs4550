import {Navigate, Route, Routes} from "react-router";
import AccountNavigation from "./Navigation";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";

export default function Account() {
    return (
        <div id="wd-account-screen">
            <table>
                <tr>
                    <td valign={"top"}>
                        <AccountNavigation/>
                    </td>
                    <td valign="top">
                        <h1>Account</h1>
                        <Routes>
                            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin"/>}/>
                            <Route path="/Signin" element={<Signin/>}/>
                            <Route path="/Profile" element={<Profile/>}/>
                            <Route path="/Signup" element={<Signup/>}/>
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    )
}