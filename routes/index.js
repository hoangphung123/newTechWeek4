// routes/index.js

const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const studentController = require('../controllers/studentController');
const messageController = require('../controllers/messageController');
const path = require('path'); // Import thư viện path

router.get('/', indexController.getIndex);

router.get('/view', (req, res) => {
  // Sử dụng phương thức sendFile để gửi tệp HTML khi truy cập "/"
  res.sendFile(path.join(__dirname, '../views/addMember.html'));
});



router.route('/20110370/:id')
  .get(studentController.getStudentById)
  .post(studentController.postStudent);

router.get('/message/:id', messageController.getMessageById);

module.exports = router;
