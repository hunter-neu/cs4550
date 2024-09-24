import Account from "./Account";
import Dashboard from "./Dashboard";
import {Navigate, Route, Routes} from "react-router";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
    return (
        <div id={"wd-kanbas"}>
            <table>
                <tr>
                    <td valign={"top"}>
                        <KanbasNavigation/>
                    </td>
                    <h1>Kanbas</h1>
                    <Routes>
                        <Route path="/" element={<Navigate to="Account"/>}/>
                        <Route path="/Account/*" element={<Account/>}/>
                        <Route path="/Dashboard" element={<Dashboard/>}/>
                    </Routes>
                </tr>
            </table>
        </div>
    )
}