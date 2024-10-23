import {HiMagnifyingGlass} from "react-icons/hi2";
import {RxCross2} from "react-icons/rx";
import {BiCalendar} from "react-icons/bi";
import SaveSubmitButtons from "./SaveSubmitButtons";
import * as db from "../../Database";
import {useParams} from "react-router-dom";

export default function AssignmentEditor() {
    const {cid, aid} = useParams();
    const assignments = db.assignments;
    const assignment = assignments.find(a => a._id === aid);
    if (!assignment) return null;
    const parseDate = (d: string) => {
        const date = new Date(d);
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${date.getDate()}, ${date.getFullYear()} ${date.getHours() % 12}:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() > 12 ? 'PM' : 'AM'}`;
    }
    return (
        <div id="wd-assignments-editor">
            <strong>Assignment Name</strong>
            <div className="input-group m-1 pe-3">
                <input type="text" className="form-control"
                       id="assignment-search" placeholder={assignment?.title}/>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-10">
                    <textarea className="form-control"
                              id="textarea2" rows={6} placeholder="The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

Your full name and section
Links to each of the lab assignments
Link to the Kanbas application
Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page."></textarea>
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
                               id="icon" placeholder={`${assignment?.points}`}/>
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
                    <div id="submission-type">
                        <div className="dropdown-menu-start justify-content-start m-1 pe-3 col-10">
                            <button className="btn btn-secondary w-75 bg-white " type="button"
                                    id="dropdownMenuButton1" aria-expanded="false">
                                {assignment?.assign_to.join(" ")} <RxCross2/>
                            </button>
                        </div>
                        <strong>Due</strong>

                        <div className="input-group">
                            <input type="text" className="form-control" value={parseDate(assignment?.due)}/>
                            <span className="input-group-text"><BiCalendar/></span>
                        </div>

                        <div id="af-u" className="row">
                            <div className="col-4">
                                <p className="p-3 float-start">Available From</p>
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" value={parseDate(assignment?.available_from)}/>
                                        <span className="input-group-text"><BiCalendar/></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <p className="p-3 float-start">Until</p>
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" value={parseDate(assignment?.available_until)}/>
                                        <span className="input-group-text"><BiCalendar/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="save-submit">
                <SaveSubmitButtons cid={cid}/>
            </div>
        </div>
    )
}