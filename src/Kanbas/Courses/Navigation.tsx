import {Link, useParams} from "react-router-dom";
import {courses} from "../Database";
import {useLocation} from "react-router";

export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const {cid} = useParams();
    const {pathname} = useLocation();
    const active = pathname.split("/")[4];
    return (
        <div id="wd-courses-navigation"
             className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link id="wd-course-home-link" to={`/Kanbas/Courses/${cid}/${link}`}
                      className={`list-group-item ${link === active ? "active" : "text-danger"} border border-0`}>
                    {link}
                </Link>
            ))}
        </div>
    )
}