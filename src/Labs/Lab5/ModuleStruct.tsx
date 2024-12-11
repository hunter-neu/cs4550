import React from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function ModuleStruct() {
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Module</h3>
            <h4>Retrieving Module</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>
            <hr/>
            <h4>Retrieving Module Name</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>
            <hr/>
        </div>
    );
}
