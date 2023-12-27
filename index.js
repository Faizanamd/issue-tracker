import express from 'express';
import path from 'path';
import ejsLayout from 'express-ejs-layouts';
import ProjectController from './src/controller/project.controller.js';
import IssueController from './src/controller/issueController.js';
const projectController = new ProjectController();
const issueController = new IssueController();
const app =express();
app.use(express.static('public'));
app.use(ejsLayout);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Set the view engine as EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(path.resolve(), 'src', 'views'));

app.get('/projects/delete/:id', projectController.deleteProjectController)
app.get('/projects/:projectId/delete/:id', projectController.deleteIssueController);


app.get('/projects/:id', projectController.showProjectController)
app.get('/projects/:id/?', issueController.filterBasedOnErrorTypes)
app.post('/newProject', projectController.addNewProjectContrller)
app.post('/newIssue', issueController.addNewIssueController);

app.get('/', projectController.issueHomePage)


export default app;