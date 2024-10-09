import {Link} from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation"
             className="wd list-group fs-5 rounded-0">
            <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home"
                  className="list-group-item active border border-0">Signin</Link>
            <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules"
                  className="list-group-item text-danger border border-0">Signup</Link>
            <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules"
                  className="list-group-item text-danger border border-0">Profile</Link>
        </div>
)
    ;
}
