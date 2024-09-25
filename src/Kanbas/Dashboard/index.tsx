import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.png" width={200}/>
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.png" width={200}/>
                        <div>
                            <h5>
                                CS5678 Programming Design Paradigm
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Program your way to success
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.png" width={200}/>
                        <div>
                            <h5>
                                DS1234 Data Mining
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Find the data you need to succeed
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.png" width={200}/>
                        <div>
                            <h5>
                                ML6666 Machine Learning
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Learn how to learn
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.png" width={200}/>
                        <div>
                            <h5>
                                MATH2300 Calculus
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Integrate this course into your life
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.png" width={200}/>
                        <div>
                            <h5>
                                CY9876 Cyber Security
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Secure your way to success
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.png" width={200}/>
                        <div>
                            <h5>
                                BIO1234 Nutrition
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Eat your way to success
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
