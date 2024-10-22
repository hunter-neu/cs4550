import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {AiOutlineDashboard} from "react-icons/ai";
import {LiaBookSolid, LiaCogSolid} from "react-icons/lia";
import {FaInbox} from "react-icons/fa6";
import {IoCalendarOutline} from "react-icons/io5";

export default function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
        { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
        { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
    ];

    return (
        <div id="wd-kanbas-navigation">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
            <Link to={`/Kanbas/Account`}> Account </Link> <br/>
            <Link to={`/Kanbas/Dashboard`}> Dashboard </Link> <br/>
            <Link to={`/Kanbas/Courses`}> Courses </Link> <br/>
            <Link to={`/Kanbas/Calendar`}> Calendar </Link> <br/>
            <Link to={`/Kanbas/Inbox`}> Inbox </Link> <br/>
            <Link to={`/Kanbas/Labs`}> Labs </Link> <br/>
        </div>
    )
}