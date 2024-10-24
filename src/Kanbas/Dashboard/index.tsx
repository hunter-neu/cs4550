import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <br/>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5678 Programming Design Paradigm
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Program your way to success
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        DS1234 Data Science
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Find the data you need to succeed
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ML6666 Machine Learning
                                    </h5>
                                    <br/>
                                    <p className="wd-dashboard-course-title card-text">
                                        Learn how to learn
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH2300 Calculus
                                    </h5>
                                    <br/>
                                    <p className="wd-dashboard-course-title card-text">
                                        Integrate this course into your life
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CY9876 Cybersecurity
                                    </h5>
                                    <br/>
                                    <p className="wd-dashboard-course-title card-text">
                                        Secure your way to success
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                                  to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        BIO1234 Nutrition
                                    </h5>
                                    <br/>
                                    <p className="wd-dashboard-course-title card-text">
                                        Eat your way to success
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
