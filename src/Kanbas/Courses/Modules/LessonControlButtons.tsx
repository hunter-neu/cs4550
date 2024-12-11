import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {useSelector} from "react-redux";
import {FaPencil, FaPlus} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";
import {useNavigate, useParams} from "react-router-dom";
import DeleteAssignment from "../Assignments/DeleteAssignment";

export default function LessonControlButtons({assignment, deleteAssignment}: {
    assignment: any,
    deleteAssignment: (aid: any) => void
}) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const isFaculty = (currentUser.role === "FACULTY" || currentUser.role === "ADMIN");
    const navigate = useNavigate();
    const {cid} = useParams();
    const aid = assignment._id;
    const editAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/${aid}`);
    };
    return (
        <div className="float-end">
            {isFaculty && <FaPencil className="text-primary me-3" onClick={editAssignment}/>}
            {isFaculty &&
                <FaTrash id={`wd-delete-assignment-${aid}-btn`} data-bs-toggle="modal"
                         data-bs-target={`#wd-delete-assignment-${aid}-dialog`} className="text-danger me-2 mb-1"/>
            }
            {isFaculty && <DeleteAssignment assignmentId={aid}
                                            dialogTitle={`Delete Assignment ${assignment.title}?`}
                                            deleteAssignment={deleteAssignment}/>}
            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
            {isFaculty && <FaPlus/>}
        </div>
    );
}
