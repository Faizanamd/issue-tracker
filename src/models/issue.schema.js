import { ObjectId } from "mongoose";
import mongoose from "mongoose";
const issueSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects',
        required: true,
    },
    // projectId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    // },
    bugTitle: {
        type: String,
        required: true,
    },
    bugOption: {
        type: [String],
        required: true,
    },
    bugDescription: {
        type: String,
        required: true,
    },
    bugAuthor: {
        type: String,
        required: true,
    },
    postTime: {
        type: String, // Assuming you have a valid date string here
        default: () => formatDate(),
    },
});

const IssueModel = mongoose.model('issues', issueSchema);
export default IssueModel;

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