import AssignmentControls from "./AssignmentControls";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {IoNewspaperOutline} from "react-icons/io5";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as assignmentClient from "./client";
import {deleteAssignment, setAssignments} from "./reducer";

export default function Assignments() {
    const {cid} = useParams();
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const fetchAssignments = async () => {
        try {
            const assignments = await assignmentClient.getAssignments(cid);
            dispatch(setAssignments(assignments));
        } catch (error) {
            console.error(error);
        }
    };
    const removeAssignment = async (aid: any) => {
        await assignmentClient.deleteAssignment(cid, aid);
        dispatch(deleteAssignment(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);
    const parseDate = (d: string) => {
        const date = new Date(d);
        if (isNaN(date.getTime())) {
            const re = /(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+).*/;
            const [, year, month, day, hour, minute, second] = re.exec(d) as any;
            console.log(year, month, day, hour, minute, second);
            return `${month}/${day}/${year} at ${hour}:${minute}:${second}`;
        }
        const month = date.toLocaleString('default', {month: 'long'});
        return `${month} ${date.getDate()} at ${date.getHours() % 12 || 12}:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() > 12 ? 'PM' : 'AM'}`;
    }
    return (
        <div id="wd-assignments">
            {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && <AssignmentControls/>}
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-white">
                        <BsGripVertical className="me-2 fs-3"/>
                        ASSIGNMENTS
                    </div>
                    <ul className="wd-assignments list-group rounded-0">
                        {assignments
                            .map((assignment: any) => (
                                <li className="wd-lesson list-group-item p-3 ps-1">
                                    <div className="row">
                                        <div className="col text-nowrap align-content-center">
                                            <BsGripVertical className="me-2 fs-3"/><IoNewspaperOutline
                                            className="me-2 fs-3 text-success"/>
                                        </div>
                                        <div className="col-9 p-0 m-0">
                                            <table>
                                                <tbody>
                                                <tr><a className="wd-assignment-link m-0 fs-2 text-black"
                                                       href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</a>
                                                </tr>
                                                <tr>
                                                    <p className="fs-5 m-0">
                                                        <span className="text-danger">Multiple Modules</span> | <strong>Not
                                                        available
                                                        until</strong> {parseDate(assignment.available_from)} |
                                                    </p>
                                                </tr>
                                                <tr>
                                                    <p className="fs-5 m-0">
                                                        <strong>Due</strong> {parseDate(assignment.due)} | <strong>100
                                                        pts</strong>
                                                    </p>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-2">
                                            <LessonControlButtons
                                                assignment={assignment}
                                                deleteAssignment={(aid) => {
                                                    removeAssignment(aid);
                                                }}/>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}