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

    async filterBasedOnErrorTypes(req, res) {
        try {
            // const { errorTypes } = req.body;
            const { bugOption } = req.body;
            const id = req.body.projectId;
            console.log("bugOption", req.body)
            const project = await projectRepository.getProjectById(id);
            const filteredIssues = await issueRepository.filterBasedOnErrorTypesRepo(bugOption);
            // res.redirect(`/projects/${req.body.projectId}`)
            res.render("projectPage", { project: project, issues: filteredIssues, projectId: id })

        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async searchIssueController(req, res) {
        try {
            console.log(req.body);
            const id =req.body.projectId;
            const  { query } = req.body;
            const project = await projectRepository.getProjectById(id);
            const filteredIssues = await issueRepository.searchBasedIssueRepo(query);
            console.log("Filtered issues", filteredIssues);
            res.render("projectPage", { project: project, issues: filteredIssues, projectId: id })
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }





}

