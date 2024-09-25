import Lab1 from "./Lab1";
import Lab3 from "./Lab3";
import Lab2 from "./Lab2";
import TOC from "./TOC";
import {Navigate, Route, Routes} from "react-router-dom";

export default function Labs() {
    return (
        <div id="wd-lab1">
            <h2>Hunter Pong</h2>
            <h3>CS 4550 T/F 3:15-5:05</h3>
            <h1>Labs</h1>
            <TOC/>
            <Routes>
                <Route path={"/"} element={<Navigate to={"Lab1"}/>}/>
                <Route path={"Lab1"} element={<Lab1/>}/>
                <Route path={"Lab2"} element={<Lab2/>}/>
                <Route path={"Lab3"} element={<Lab3/>}/>
            </Routes>
        </div>
    );
}