import "./styles.css";
import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addModule, deleteModule, editModule, setModules, updateModule} from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
    const {cid} = useParams();
    const [moduleName, setModuleName] = useState("");
    const {modules} = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    }
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = {name: moduleName, course: cid};
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    }
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    }
    useEffect(() => {
        fetchModules();
    }, []);
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
    return (
        <div id="wd-modules">
            <div>
                {isFaculty &&
                    <ModulesControls setModuleName={setModuleName} moduleName={moduleName}
                                     addModule={createModuleForCourse}/>}<br/><br/><br/><br/>
                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
                        .map((module: any) => (
                            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="wd-title p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3"/>
                                    {!module.editing && module.name}
                                    {module.editing && (
                                        <input className="form control w-50 d-inline-block"
                                               onChange={(e) => dispatch(updateModule({
                                                   ...module,
                                                   name: e.target.value
                                               }))}
                                               onKeyDown={(e) => {
                                                   if (e.key === "Enter") {
                                                       saveModule({...module, editing: false})
                                                   }
                                               }}
                                               defaultValue={module.name}/>
                                    )}
                                    <ModuleControlButtons
                                        moduleId={module._id}
                                        deleteModule={(moduleId) => {
                                            removeModule(moduleId);
                                        }}
                                        editModule={(moduleId) => {
                                            dispatch(editModule(moduleId));
                                        }}/>
                                </div>
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons &&
                                        module.lessons.map((lesson: any) => (
                                            <li className="wd-lesson list-group-item p-3 ps-1">
                                                <BsGripVertical className="me-2 fs-3"/>
                                                {lesson.name}
                                                {/*<LessonControlButtons/>*/}
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}