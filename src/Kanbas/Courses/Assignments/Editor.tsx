import {RxCross2} from "react-icons/rx";
import SaveSubmitButtons from "./SaveSubmitButtons";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addAssignment, setAssignments, updateAssignment} from "./reducer";
import * as assignmentClient from "../Assignments/client";


export default function AssignmentEditor() {
    const parseDate = (d: string) => {
        const date = new Date(d);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    }
    const now = parseDate(new Date().toISOString());
    const {cid, aid} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [assignmentId, setAssignmentId] = useState(aid);
    const [assignment, setAssignment] = useState<any>();
    const fetchAssignments = async () => {
        if (!cid) return;
        if (assignmentId === "New") {
            const newAssignment = {
                course: cid,
                title: "New Assignment",
                description: "New Assignment Description",
                points: 100,
                assignment_group: "Assignments",
                display_grade_as: "Points",
                submission_type: "Online",
                entry_options: {
                    text_entry: true,
                    website_url: true,
                    media_recordings: true,
                    student_annotation: true,
                    file_uploads: true,
                },
                assign_to: ["Everyone"],
                due: now,
                available_from: now,
                available_until: now,
            };
            const a = await assignmentClient.createAssignment(cid, newAssignment);
            dispatch(addAssignment(a));
            setAssignmentId(a._id);
            setAssignment(a);
        } else {
            const assignments = await assignmentClient.getAssignments(cid as string);
            dispatch(setAssignments(assignments));
            const a = assignments.find((a: any) => a._id === assignmentId);
            setAssignment(a);
        }
    };
    const saveAssignment = async (assignment: any) => {
        await assignmentClient.updateAssignment(cid, assignment);
        dispatch(updateAssignment(assignment));
    }
    useEffect(() => {
        fetchAssignments();
    }, []);
    return (
        <div id="wd-assignments-editor">
            <strong>Assignment Name</strong>
            <div className="input-group m-1 pe-3">
                <input type="text" className="form-control"
                       id="assignment-search" placeholder={assignment?.title}
                       onChange={(x) => setAssignment({...assignment, title: x.target.value})}/>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-10">
                    <textarea className="form-control"
                              id="textarea2" rows={6} placeholder={assignment?.description}
                              onChange={(x) => setAssignment({...assignment, description: x.target.value})}></textarea>
                </div>
            </div>
            <br/>
            <div id="assignment-points" className="row">
                <div className="col-2">
                    <p className="p-3 float-end">Points</p>
                </div>
                <div className="col-9 float-start">
                    <div className="input-group m-1 pe-3 col-10">
                        <input type="text" className="form-control"
                               id="icon" placeholder={`${assignment?.points}`}
                               onChange={(x) => setAssignment({...assignment, points: parseInt(x.target.value)})}/>
                    </div>
                </div>
            </div>
            <div id="assignment-group" className="row">
                <div className="col-2">
                    <p className="p-3 float-end">Assignment Group</p>
                </div>
                <div className="col-9 float-start">
                    <div className="dropdown-menu-start justify-content-start m-1 pe-3 col-10">
                        <button className="btn btn-secondary dropdown-toggle w-75 bg-white " type="button"
                                id="dropdownMenuButton1" aria-expanded="false">
                            {assignment?.assignment_group}
                        </button>
                    </div>
                </div>
            </div>
            <div id="assignment-display-grade" className="row">
                <div className="col-2">
                    <p className="p-3 float-end">Display Grade As</p>
                </div>
                <div className="col-9 float-start">
                    <div className="dropdown-menu-start justify-content-start m-1 pe-3 col-10">
                        <button className="btn btn-secondary dropdown-toggle w-75 bg-white " type="button"
                                id="dropdownMenuButton1" aria-expanded="false">
                            {assignment?.display_grade_as}
                        </button>
                    </div>
                </div>
            </div>
            <div id="assignment-sub-type" className="row">
                <div className="col-2">
                    <p className="p-3 float-end">Submission Type</p>
                </div>
                <div className="col-9 float-start border">
                    <div id="submission-type">
                        <div className="dropdown-menu-start justify-content-start m-1 pe-3 col-10">
                            <button className="btn btn-secondary dropdown-toggle w-75 bg-white " type="button"
                                    id="dropdownMenuButton1" aria-expanded="false">
                                {assignment?.submission_type}
                            </button>
                        </div>
                        <strong>Online Entry Options</strong>
                        <div id="submission-options" className="border-2 border-success">
                            <div className="row mb-3 float-start text-nowrap">
                                <div className="col-10">
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te" defaultChecked={assignment?.entry_options.text_entry}/>
                                        <label className="form-check-label" htmlFor="r6">
                                            Text Entry </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te" defaultChecked={assignment?.entry_options.website_url}/>
                                        <label className="form-check-label" htmlFor="r6">
                                            Website URL </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te" defaultChecked={assignment?.entry_options.media_recordings}/>
                                        <label className="form-check-label" htmlFor="r6">
                                            Media Recordings </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te" defaultChecked={assignment?.entry_options.student_annotation}/>
                                        <label className="form-check-label" htmlFor="r6">
                                            Student Annotation </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te" defaultChecked={assignment?.entry_options.file_uploads}/>
                                        <label className="form-check-label" htmlFor="r6">
                                            File Uploads </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="assignment-assign-to" className="row">
                <div className="col-2">
                    <p className="p-3 float-end">Assign</p>
                </div>
                <div className="col-9 float-start border">
                    <strong>Assign to</strong>
                    <div id="assignment-dates">
                        <div className="dropdown-menu-start justify-content-start m-1 pe-3 col-10">
                            <button className="btn btn-secondary w-75 bg-white " type="button"
                                    id="dropdownMenuButton1" aria-expanded="false">
                                {assignment?.assign_to.join(" ")} <RxCross2/>
                            </button>
                        </div>
                        <strong>Due</strong>

                        <div className="row mb-3 p-2">
                            <input id="wd-due-date" type="datetime-local" className="form-control col"
                                   value={parseDate(assignment?.due)}
                                   onChange={(x) => setAssignment({...assignment, due: x.target.value})}/>
                        </div>

                        <div id="assignment-af-u" className="row mb-3">
                            <div className="col">
                                <p className="float-start">Available From</p>
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="datetime-local" className="form-control"
                                               value={parseDate(assignment?.available_from)}
                                               onChange={(x) => setAssignment({
                                                   ...assignment,
                                                   available_from: x.target.value
                                               })}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <p className="float-start">Until</p>
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="datetime-local" className="form-control"
                                               value={parseDate(assignment?.available_until)}
                                               onChange={(x) => setAssignment({
                                                   ...assignment,
                                                   available_until: x.target.value
                                               })}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="save-submit">
                <SaveSubmitButtons cid={cid} aid={assignmentId} setAssignment={() => {
                    saveAssignment(assignment);
                }}/>
            </div>
        </div>
    )
}