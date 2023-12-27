
import IssueModel from "./issue.schema.js";
export default class IssueRepository{

    async addNewIssueRepo(issue){
        try{
            const newIssue = new IssueModel(issue);
            await newIssue.save();
            return newIssue;
        }catch(err){
            console.log(err)
            throw new Error(err);
        }

    }
    async getIssuesById(projectId){
        try{
            const issues = await IssueModel.find({ projectId: projectId });
            // console.log(issues);
            return issues;
        }catch(err){
            console.log(err)
            throw new Error(err);
        }
    }
    async  deleteIssueByProjectId(projectId) {
        try {
            const result = await IssueModel.deleteMany({ projectId: projectId });
            if (result.deletedCount > 0) {
                console.log(`${result.deletedCount} issues deleted for project with ID ${projectId}`);
            } else {
                console.log(`No issues found for project with ID ${projectId}`);
            }
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    }
    async detelteIssyeById(id){
        try{
                await IssueModel.findByIdAndDelete(id);
        }catch(err){
            console.log(err);
            throw new Error(err);
        }
    }
    async  filterBasedOnErrorTypesRepo(errorTypes) {
        try {
            const filteredIssues = await Issue.find({ bugOption: { $in: errorTypes } }).exec();
            return filteredIssues;
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    }

}