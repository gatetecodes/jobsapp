const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const applicantRoutes = require('./routes/applicantsRoutes');
const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://gatete:MRGatete1988@cluster0.ucn0t.mongodb.net/jobsapp?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(app.listen(PORT, () => console.log(`App running on port ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.use('/api/applicants', applicantRoutes);
