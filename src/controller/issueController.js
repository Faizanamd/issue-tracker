import ProjectRepository from "../models/project.repository.js";
import IssueRepository from "../models/issue.repository.js";
import mongoose from "mongoose";
const projectRepository = new ProjectRepository();
const issueRepository = new IssueRepository();


export default class IssueController {

    async addNewIssueController(req, res) {
        try {
            // console.log(req.body);
            
            await issueRepository.addNewIssueRepo(req.body);
            const projectId = req.body.projectId;
            res.redirect(`/projects/${projectId}`);
            
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    async  filterBasedOnErrorTypes(req, res) {
        try {
            const { errorTypes } = req.body;
            const filteredIssues = await issueRepository.filterBasedOnErrorTypesRepo(errorTypes);
            res.json(filteredIssues);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    




}

