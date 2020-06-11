const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProjectSchema = new Schema({
  project_name: {
    type: String,
    required: true
  },
  project_email:{
    type: String,
    required:true
  },
  project_startTime: {
    type: Date  ,
    required: true
  },
  project_endTime: {
    type: Date,
    required: false
  },
  projectAddedOn: {
    type: Date,
    default: Date.now
  },  
}, {
  collection: 'projects'
}

);
module.exports = Project = mongoose.model("project", ProjectSchema);
// project_name            : this.state.project_name,
//project_email           : this.state.project_email,
//project_startTime       : this.state.project_startTime,
//project_endTime         : this.state.project_endTime