import {Link} from "react-router-dom";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
            <Link to={`/Kanbas/Account`}> Account </Link> <br/>
            <Link to={`/Kanbas/Dashboard`}> Dashboard </Link> <br/>
            <Link to={`/Kanbas/Courses`}> Courses </Link> <br/>
            <Link to={`/Kanbas/Calendar`}> Calendar </Link> <br/>
            <Link to={`/Kanbas/Inbox`}> Inbox </Link> <br/>
            <Link to={`/Labs`}> Labs </Link> <br/>
        </div>
    )
}