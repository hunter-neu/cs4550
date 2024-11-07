import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addEnrollment, deleteEnrollment} from "./Courses/People/reducer";

export default function Dashboard(
    {courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void,
        updateCourse: () => void
    }
) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {enrollments} = useSelector((state: any) => state.enrollmentsReducer);
    const isFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
    const dispatch = useDispatch();
    const [showAll, setShowAll] = useState(false);
    const getEnrollment = (course: { _id: any; }) => {
        return enrollments.find(
            (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
        )
    }
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            {isFaculty && <div id="new-course-stuff">
                <h5>New Course
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}>Add</button>
                    <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5>
                <br/>
                <input value={course.name} className="form-control-mb-2"
                       onChange={(e) => setCourse({...course, name: e.target.value})}/>
                <textarea value={course.description} className="form-control"
                          onChange={(e) => setCourse({...course, description: e.target.value})}/>
            </div>}
            {!isFaculty &&
                <button id="wd-view-courses"
                        onClick={() => {
                            setShowAll(!showAll);
                        }}
                        className="btn btn-primary me-2 float-end">
                    Enrollments
                </button>}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .filter((course) =>
                            enrollments.some(
                                (enrollment: any) =>
                                    showAll ||
                                    (enrollment.user === currentUser._id &&
                                        enrollment.course === course._id)
                            ))
                        .sort((c1, c2) => {
                            if(getEnrollment(c1)) {
                                return getEnrollment(c2) ? 0 : -1;
                            } else {
                                return getEnrollment(c2) ? 1 : 0;
                            }
                        })
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{width: "300px"}}>
                                <div className="card h-100 rounded-3 overflow-hidden">
                                    <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                                          to={`/Kanbas/Courses/${course._id}/Home`}>
                                        <img alt="image" src="/images/reactjs.png" width="100%" height={160}/>
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name}
                                            </h5>
                                            <br/>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                                               style={{maxHeight: 100}}>
                                                {course.description}
                                            </p>
                                            <button className="btn btn-primary"> Go</button>
                                            {isFaculty &&
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                    Delete
                                                </button>}
                                            {isFaculty &&
                                                <button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end">
                                                    Edit
                                                </button>}
                                            {!isFaculty && showAll &&
                                                <button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            console.log("Enrollment course:", course)
                                                            const enrollment = getEnrollment(course);
                                                            if (!enrollment) {
                                                                dispatch(addEnrollment({
                                                                    user: currentUser._id,
                                                                    course: course._id
                                                                }))
                                                            } else {
                                                                dispatch(deleteEnrollment(enrollment._id));
                                                            }
                                                        }}
                                                        className="btn btn-warning me-2 float-end">
                                                    {getEnrollment(course) ? "Unenroll" : "Enroll"}
                                                </button>}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
