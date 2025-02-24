import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    depart: { type: String, required: true, trim: true },
    salary: { type: String, required: true }
});

// Ensure the model is not redefined when hot reloading
export const EmployeeModel = mongoose.models.employee || mongoose.model('employee', employeeSchema)
