import AssignmentControls from "./AssignmentControls";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {FaRegNewspaper} from "react-icons/fa";
import {IoNewspaperOutline} from "react-icons/io5";
import * as db from "../../Database";
import {useParams} from "react-router-dom";

export default function Assignments() {
    const {cid} = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">
            <AssignmentControls/>
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-white">
                        <BsGripVertical className="me-2 fs-3"/>
                        ASSIGNMENTS
                        <ModuleControlButtons/>
                    </div>
                    <ul className="wd-assignments list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="row">
                                <div className="col text-nowrap align-content-center">
                                    <BsGripVertical className="me-2 fs-3"/><IoNewspaperOutline
                                    className="me-2 fs-3 text-success"/>
                                </div>
                                <div className="col-10 p-0 m-0">
                                    <table>
                                        <tbody>
                                        <tr><a className="wd-assignment-link m-0 fs-2 text-black"
                                               href="#/Kanbas/Courses/1234/Assignments/123">A1</a></tr>
                                        <tr>
                                            <p className="fs-5 m-0">
                                                <span className="text-danger">Multiple Modules</span> | <strong>Not
                                                available
                                                until</strong> February 6 at 12:00am |
                                            </p>
                                        </tr>
                                        <tr>
                                            <p className="fs-5 m-0">
                                                <strong>Due</strong> March 13 at 11:59pm
                                                | <strong>100 pts</strong>
                                            </p>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col">
                                    <LessonControlButtons/>
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 float">
                            <div className="row">
                                <div className="col text-nowrap align-content-center">
                                    <BsGripVertical className="me-2 fs-3"/><IoNewspaperOutline
                                    className="me-2 fs-3 text-success"/>
                                </div>
                                <div className="col-10 p-0 m-0">
                                    <table>
                                        <tbody>
                                        <tr><a className="wd-assignment-link m-0 fs-2 text-black"
                                               href="#/Kanbas/Courses/1234/Assignments/123">A2</a></tr>
                                        <tr>
                                            <p className="fs-5 m-0">
                                                <span className="text-danger">Multiple Modules</span> | <strong>Not
                                                available
                                                until</strong> May 6 at 12:00am |
                                            </p>
                                        </tr>
                                        <tr>
                                            <p className="fs-5 m-0">
                                                <strong>Due</strong> May 13 at 11:59pm
                                                | <strong>100 pts</strong>
                                            </p>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col">
                                    <LessonControlButtons/>
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 float">
                            <div className="row">
                                <div className="col text-nowrap align-content-center">
                                    <BsGripVertical className="me-2 fs-3"/><IoNewspaperOutline
                                    className="me-2 fs-3 text-success"/>
                                </div>
                                <div className="col-10 p-0 m-0">
                                    <table>
                                        <tbody>
                                        <tr><a className="wd-assignment-link m-0 fs-2 text-black"
                                               href="#/Kanbas/Courses/1234/Assignments/123">A3</a></tr>
                                        <tr>
                                            <p className="fs-5 m-0">
                                                <span className="text-danger">Multiple Modules</span> | <strong>Not
                                                available
                                                until</strong> May 8 at 12:00pm |
                                            </p>
                                        </tr>
                                        <tr>
                                            <p className="fs-5 m-0">
                                                <strong>Due</strong> May 27 at 11:59pm
                                                | <strong>100 pts</strong>
                                            </p>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col">
                                    <LessonControlButtons/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}