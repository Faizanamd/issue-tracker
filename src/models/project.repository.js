import ProjectModel from "./project.schema.js";
import { ObjectId } from "mongoose";
import mongoose from "mongoose";
export default class ProjectRepository {
    async addNewIssueRepository(issue) {
        try {
            const newIssue = new ProjectModel(issue);
            await newIssue.save();
            return newIssue;
        } catch (err) {
            console.log(err)
            throw new Error(err);
        }
    }
    async getAllProjects() {
        try {
            const allProjects = await ProjectModel.find();
            return allProjects;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
    async getProjectById(id) {
        try {
            const newId = new mongoose.Types.ObjectId(id);
            const project = await ProjectModel.findById(newId);
            // console.log(project);
            return project;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
    async deletProjectRepo(id) {
        try {
            const deletedProject = await ProjectModel.findByIdAndDelete(id);

            if (!deletedProject) {
                throw new Error('Project not found'); // Handle if the project doesn't exist
            }

            console.log(`Project with ID ${id} has been deleted`);
            return deletedProject;
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
}