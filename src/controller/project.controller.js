import IssueRepository from "../models/issue.repository.js";
import ProjectRepository from "../models/project.repository.js";

const projectRepository = new ProjectRepository();
const issueRepository = new IssueRepository();

export default class ProjectController{
    async issueHomePage(req, res){
        const projects = await projectRepository.getAllProjects();
        // console.log(projects);
        // console.log("Home page got printeed")
        res.render('home', {allProjects: projects});
    }
    async addNewProjectContrller(req, res){
        console.log(req.body);
        try{
            const newIssue = await projectRepository.addNewIssueRepository(req.body);
            // console.log("add New project got printed");
            if(newIssue){
                res.redirect('/');
            }else{
                res.render('home');
            }
        }
        catch(err){
            console.log(err)
            res.redirect('/')
        }
    }
    async showProjectController(req , res){
        const id = req.params.id;
        const project  = await projectRepository.getProjectById(id);
        // console.log("Project", project);
        const issues = await issueRepository.getIssuesById(id);
        
        // console.log("issues", issues);
        res.render("projectPage", {project: project,issues: issues, projectId: id})
    }
    async deleteProjectController(req,res){
        console.log(req.body);
        console.log(req.params.id);
        await projectRepository.deletProjectRepo(req.params.id);
        await issueRepository.deleteIssueByProjectId(req.params.id);
        res.redirect('/');
    }
    async deleteIssueController(req, res){
        console.log(req.body);
        console.log(req.params.projectId);
        console.log(req.params.id);
        await issueRepository.detelteIssyeById(req.params.id);
        res.redirect(`/projects/${req.params.projectId}`)

    }
}