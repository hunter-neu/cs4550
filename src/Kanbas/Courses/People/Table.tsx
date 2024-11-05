import {FaUserCircle} from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import {useSelector} from "react-redux";

export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = db;
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    {isFaculty && <th>Login ID</th>}
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
                </thead>
                <tbody>
                {users
                    .filter((usr) =>
                        enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid)
                    )
                    .map((user: any) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                <FaUserCircle className="me-2 fs-1 text-secondary"/>
                                <span className="wd-first-name">{user.firstName}</span>
                                <span className="wd-last-name">{user.lastName}</span>
                            </td>
                            {isFaculty && <td className="wd-login-id">{user.loginId}</td>}
                            <td className="wd-section">{user.section}</td>
                            <td className="wd-role">{user.role}</td>
                            <td className="wd-last-activity">{user.lastActivity}</td>
                            <td className="wd-total-activity">{user.totalActivity}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>);
}