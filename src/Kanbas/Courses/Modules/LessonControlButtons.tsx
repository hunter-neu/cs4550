import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {useDispatch, useSelector} from "react-redux";
import {FaPencil, FaPlus} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";
import {setCurrentUser} from "../../Account/reducer";
import {useNavigate, useParams} from "react-router-dom";
import DeleteAssignment from "../Assignments/DeleteAssignment";

export default function LessonControlButtons({assignmentId, deleteAssignment}: {
    assignmentId: any,
    deleteAssignment: (aid: any) => void
}) {
    console.log("Assignment:", assignmentId);
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const isFaculty = (currentUser.role === "FACULTY" || currentUser.role === "ADMIN");
    const navigate = useNavigate();
    const {cid} = useParams();
    const editAssignment = () => {
        console.log("Editing assignment:", assignmentId);
        navigate(`/Kanbas/Courses/${cid}/Assignments/${assignmentId}`);
    };
    const dialog = `Delete Assignment ${assignmentId}?`;
    const rmAssignment = () => {
        console.log("Deleting assignment:", assignmentId);
        deleteAssignment(assignmentId);
    }
    return (
        <div className="float-end">
            {isFaculty && <FaPencil className="text-primary me-3" onClick={editAssignment}/>}
            {isFaculty &&
                <FaTrash id="wd-delete-assignment-btn" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" className="text-danger me-2 mb-1"/>
                }
            {isFaculty && <DeleteAssignment dialogTitle={dialog} assignmentId={assignmentId} deleteAssignment={rmAssignment}/>}
            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
            {isFaculty && <FaPlus/>}
        </div>
    );
}
