import {HiMagnifyingGlass} from "react-icons/hi2";
import {RxCross2} from "react-icons/rx";
import {BiCalendar} from "react-icons/bi";
import SaveSubmitButtons from "./SaveSubmitButtons";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <strong>Assignment Name</strong>
            <div className="input-group m-1 pe-3">
                <input type="text" className="form-control"
                       id="assignment-search" placeholder="A1"/>
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
                               id="icon" placeholder=""/>
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
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            ASSIGNMENTS
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
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Percentage
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
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Online
                            </button>
                        </div>
                        <strong>Online Entry Options</strong>
                        <div id="submission-options" className="border-2 border-success">
                            <div className="row mb-3 float-start text-nowrap">
                                <div className="col-10">
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te"/>
                                        <label className="form-check-label" htmlFor="r6">
                                            Text Entry </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te" checked/>
                                        <label className="form-check-label" htmlFor="r6">
                                            Website URL </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te"/>
                                        <label className="form-check-label" htmlFor="r6">
                                            Media Recordings </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te"/>
                                        <label className="form-check-label" htmlFor="r6">
                                            Student Annotation </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input form-control" type="checkbox"
                                               id="te"/>
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
                            <button className="btn btn-secondary dropdown-toggle w-75 bg-white " type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Everyone <RxCross2/>
                            </button>
                        </div>
                        <strong>Due</strong>

                        <div className="input-group">
                            <input type="text" className="form-control" value="May 13, 2024 11:59 PM"/>
                            <span className="input-group-text"><BiCalendar/></span>
                        </div>

                        <div id="af-u" className="row">
                            <div className="col-4">
                                <p className="p-3 float-start">Available From</p>
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" value="May 13, 2024 11:59 PM"/>
                                        <span className="input-group-text"><BiCalendar/></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <p className="p-3 float-start">Until</p>
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" value="June 23, 2024 11:59 PM"/>
                                        <span className="input-group-text"><BiCalendar/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="save-submit">
                <SaveSubmitButtons/>
            </div>
        </div>
    )
}