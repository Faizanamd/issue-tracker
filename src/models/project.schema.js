
import mongoose from "mongoose";

const projectSchmea = new mongoose.Schema({
    name: String,
    description: String,
    author:String,
    postTime: {
        type: String,
        default: () => formatDate() 
    }
});

const ProjectModel = mongoose.model('projects', projectSchmea);
export default ProjectModel;

function formatDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const currentDate = new Date();
  
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
  
    const formattedDateTime = `${hours}:${minutes} ${day}${month} ${year}`;
  
    return formattedDateTime;
  }