import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {FaPencil, FaPlus} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";

export default function ModuleControlButtons({moduleId, deleteModule, editModule}: {
    moduleId: string,
    deleteModule: (moduleId: string) => void,
    editModule: (moduleId: string) => void
}) {
    return (
        <div className="float-end">
            <FaPencil className="text-primary me-3" onClick={() => editModule(moduleId)}/>
            <FaTrash className="text-danger me-2 mb-1" onClick={() => {
                deleteModule(moduleId);
            }}/>
            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
            <FaPlus/>
        </div>
    );
}
