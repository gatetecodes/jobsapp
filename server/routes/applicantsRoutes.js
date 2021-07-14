const express = require('express');
const applicantController = require('../controllers/applicantsController');
const router = express.Router();

router.get('/', applicantController.getAllApplicants);
router.get('/:id', applicantController.getApplicant);
router.post('/', applicantController.createApplicant);

module.exports = router;
