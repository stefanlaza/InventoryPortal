const express = require('express');
const router = express.Router();
const multer = require('multer');
const Contract = require('../models/Contract');
const Employee = require('../models/Employee');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('contract'), async (req, res) => {
  const { employeeId } = req.body;
  const filePath = req.file.path;
  const date = new Date();

  try {
    const contract = new Contract({ employee: employeeId, filePath, date });
    await contract.save();

    res.redirect('/');
  } catch (error) {
    console.error('Error uploading contract:', error);
    res.status(500).send('Error uploading contract');
  }
});

module.exports = router;
