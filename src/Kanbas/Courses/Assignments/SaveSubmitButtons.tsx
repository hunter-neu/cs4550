import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
export default function SaveSubmitButtons() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-view-progress" className="btn btn-lg btn-danger me-1 float-end"
                    type="button" data-bs-toggle="dropdown">
                Save
            </button>
            <button id="wd-add-module-btn" className="btn btn-lg bg-white me-1 float-end border border-1 border-black">
                Cancel
            </button>
        </div>
    );
}
