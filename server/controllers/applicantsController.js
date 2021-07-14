const Applicant = require('../models/applicantsModel');

exports.getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find().sort('name');

    res.status(200).json(applicants);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.createApplicant = async (req, res) => {
  try {
    const newApplicant = await Applicant.create(req.body);

    res.status(201).json(newApplicant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getApplicant = async (req, res) => {
  try {
    const applicant = await Applicant.findById(req.params.id);
    if (!applicant) {
      return res
        .status(404)
        .json({ message: 'No user with that ID was found' });
    }
    res.status(200).json(applicant);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
