import CoursesNavigation from "./Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import {FaAlignJustify} from "react-icons/fa6";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2 className={"text-danger"}>
                <FaAlignJustify className={"me-4 fs-4 mb-1"}/>
                Course 1234</h2>
            <hr/>
            <table>
                <tr>
                    <td valign={"top"}>
                        <CoursesNavigation/>
                    </td>
                    <td valign={"top"}>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home/>}/>
                            <Route path="Modules" element={<Modules/>}/>
                            <Route path="Assignments" element={<Assignments/>}/>
                            <Route path="Assignments/:aid" element={<AssignmentEditor/>}/>
                            <Route path="People" element={<h2>People</h2>}/>
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    )
}