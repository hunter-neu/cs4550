import {FaPlus} from "react-icons/fa6";
import {HiMagnifyingGlass} from "react-icons/hi2";
import React from "react";
import {Link, useParams} from "react-router-dom";

export default function AssignmentControls() {
// ({assignmentName, setAssignmentName, addAssignment}:
//                                                {
//                                                    assignmentName: string;
//                                                    setAssignmentName: (title: string) => void;
//                                                    addAssignment: () => void;
//                                                }) {
    const {cid} = useParams();
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Link to={`/Kanbas/Courses/${cid}/Assignments/New`} id="wd-new-assignment"
                  className="btn btn-lg btn-danger me-1 float-end"
                  type="button">
                <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                Assignment
            </Link>
            <button id="wd-assignment-new-group" className="btn btn-lg btn-secondary me-1 float-end"
                    type="button" data-bs-toggle="dropdown">
                <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                Group
            </button>
            <div className="mb-3 row">
                <div className="input-group m-1">
                    <span className="input-group-text"><HiMagnifyingGlass/></span>
                    <input type="text" className="form-control"
                           id="assignment-search" placeholder="Search..."/>
                </div>
            </div>
        </div>
    );
}
