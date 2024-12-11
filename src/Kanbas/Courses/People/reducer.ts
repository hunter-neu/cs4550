import {createSlice} from "@reduxjs/toolkit";
import {enrollments} from "../../Database";

const initialState = {
    enrollments: enrollments,
};
const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        addEnrollment: (state, {payload: enrollment}) => {
            console.log("Adding Enrollment", enrollment)
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                user: enrollment.user,
                course: enrollment.course,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        deleteEnrollment: (state, {payload: enrollmentId}) => {
            state.enrollments = state.enrollments.filter(
                (m: any) => m._id !== enrollmentId);
        },
        updateEnrollment: (state, {payload: enrollment}) => {
            state.enrollments = state.enrollments.map((m: any) =>
                m._id === enrollment._id ? enrollment : m
            ) as any;
        },
    },
});
export const {addEnrollment, deleteEnrollment, updateEnrollment} =
    enrollmentSlice.actions;
export default enrollmentSlice.reducer;