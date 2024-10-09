import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function AssignmentControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-new-assignment" className="btn btn-lg btn-danger me-1 float-end"
                    type="button" data-bs-toggle="dropdown">
                <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                Assignment
            </button>
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
