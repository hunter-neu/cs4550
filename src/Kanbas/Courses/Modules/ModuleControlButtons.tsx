import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {FaPencil, FaPlus} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";
import {useSelector} from "react-redux";

export default function ModuleControlButtons({moduleId, deleteModule, editModule}: {
    moduleId: string,
    deleteModule: (moduleId: string) => void,
    editModule: (moduleId: string) => void
}) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const isFaculty = (currentUser.role === "FACULTY" || currentUser.role === "ADMIN");
    return (
        <div className="float-end">
            {isFaculty && <FaPencil className="text-primary me-3" onClick={() => editModule(moduleId)}/>}
            {isFaculty && <FaTrash className="text-danger me-2 mb-1" onClick={() => {
                deleteModule(moduleId);
            }}/>}
            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
            {isFaculty && <FaPlus/>}
        </div>
    );
}
