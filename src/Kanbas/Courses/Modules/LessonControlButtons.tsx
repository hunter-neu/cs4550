import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {useDispatch, useSelector} from "react-redux";
import {FaPencil, FaPlus} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";
import {setCurrentUser} from "../../Account/reducer";
import {useNavigate, useParams} from "react-router-dom";

export default function LessonControlButtons({assignmentId, deleteAssignment}: {
    assignmentId: string,
    deleteAssignment: () => void
}) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const isFaculty = (currentUser.role === "FACULTY" || currentUser.role === "ADMIN");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cid} = useParams();
    const editAssignment = (aid: any) => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/${aid}`);
    };
    return (
        <div className="float-end">
            <FaPencil className="text-primary me-3" onClick={() => editAssignment(assignmentId)}/>
            <div className="modal-body">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cancel
                </button>
                <button onClick={deleteAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                    Confirm
                </button>
            </div>
            <div className="modal-footer">
                <FaTrash data-bs-dismiss="modal" className="text-danger me-2 mb-1" onClick={() => {
                    deleteAssignment();
                }}/>
            </div>

            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
            {
                isFaculty && <FaPlus/>
            }
        </div>
    )
        ;
}
