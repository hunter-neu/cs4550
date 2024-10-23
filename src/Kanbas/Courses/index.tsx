import CoursesNavigation from "./Navigation";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import {FaAlignJustify} from "react-icons/fa6";
import PeopleTable from "./People/Table";
import {courses} from "../Database";
import {useLocation} from "react-router";

export default function Courses() {
    const {cid} = useParams();
    const {pathname} = useLocation();
    const course = courses.find((c) => (c._id === cid));
    return (
        <div id="wd-courses">
            <h2 className={"text-danger text-black"}>
                <FaAlignJustify className={"me-4 fs-4 mb-1"}/>
                {course && course.name} &gt; {pathname.split('/')[4]}</h2>
            <hr/>
            <div className={"d-flex"}>
                <div className={"d-none d-md-block"}>
                    <CoursesNavigation/>
                </div>
                <div className={"flex-fill"}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>}/>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Assignments" element={<Assignments/>}/>
                        <Route path="Assignments/:aid" element={<AssignmentEditor/>}/>
                        <Route path="People" element={<PeopleTable/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}