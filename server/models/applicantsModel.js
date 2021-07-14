const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name!'],
  },
  title: {
    type: String,
    required: [true, 'Please enter your title'],
  },
  status: {
    type: String,
    enum: ['', 'pending', 'dropped', 'passed'],
    default: 'pending',
  },
  description: String,
  resume: String,
});
const Applicant = mongoose.model('Applicant', applicantSchema);
module.exports = Applicant;
