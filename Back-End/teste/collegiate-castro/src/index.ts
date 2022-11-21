
import app from "./app";
import createTeacher from "./endpoints/createTeacher";
import getAllTeacher from "./endpoints/getAllTeacher";

app.get('/teacher', createTeacher)

app.put('/teacher', getAllTeacher)