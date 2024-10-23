import {Link} from "react-router-dom";

export default function SaveSubmitButtons({cid}: { cid: any }) {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-view-progress"
                  className="btn btn-lg btn-danger me-1 float-end">
                Save</Link>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-add-module-btn"
                  className="btn btn-lg bg-white me-1 float-end border border-1 border-black">
                Cancel</Link>
        </div>
    );
}
