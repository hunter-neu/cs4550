import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const getAssignments = async (courseId: any) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
}
export const deleteAssignment = async (courseId: any, assignmentId: any) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
}
export const updateAssignment = async (courseId: any, assignment: any) => {
    const {data} = await axios.put(`${COURSES_API}/${courseId}/assignments/${assignment._id}`, assignment);
    return data;
}