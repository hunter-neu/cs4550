import {Link} from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import {FaBook, FaInbox, FaRegCircleUser} from "react-icons/fa6";
import {FaCalendarAlt} from "react-icons/fa";
import {ImLab} from "react-icons/im";
import {LuCalendarDays} from "react-icons/lu";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" style={{width: 120}}
        className={"list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"}>
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank"
               className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px"/></a>
            <Link to={`/Kanbas/Account`}
                  className="list-group-item text-center border-0 bg-black text-white">
                <FaRegCircleUser className="fs-1 text text-white" /><br />Account</Link>
            <Link to={`/Kanbas/Dashboard`}
                  className="list-group-item text-center border-0
                   bg-white text-danger">
                    <AiOutlineDashboard className="fs-1 text-danger"/><br /> Dashboard </Link>
            <Link to={`/Kanbas/Courses`}
            className="list-group-item text-center border-0
            bg-black text-danger"> <LiaBookSolid className="fs-1 text-danger"/> <br/> Courses </Link>
            <Link to={`/Kanbas/Calendar`}
                  className="list-group-item text-center border-0
            bg-black text-danger"> <LuCalendarDays className="fs-1 text-danger"/><br/> Calendar </Link>
            <Link to={`/Kanbas/Inbox`}
            className="list-group-item text-center border-0
            bg-black text-danger"> <FaInbox className="fs-1 text-danger"/> <br/> Inbox </Link>
            <Link to={`/Kanbas/Labs`}
            className="list-group-item text-center border-0
            bg-black text-danger"> <ImLab className="fs-1 text-danger"/> <br/> Labs </Link>
        </div>
    )
}