import {IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {FaPlus} from "react-icons/fa6";

export default function MainControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
            <FaPlus/>
        </div>
    );
}
