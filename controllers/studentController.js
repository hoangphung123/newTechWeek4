// controllers/studentController.js

const mygroup = require('../models/mygroup');

function getStudentById(req, res) {
  const { id } = req.params;
  const student = mygroup.find(item => item.id === id);
  if (student) {
    res.json(student);
  } else {
    res.json({ error: 'Not valid' });
  }
}

const groupMembers = ['20110001', '20110002', '20110003']; // Danh sách thành viên nhóm  

function postStudent(req, res) {
  const { id, name } = req.body;
  if (id && name) {
    // Kiểm tra xem id là MSSV của thành viên nhóm và chưa có trong danh sách mygroup
    if (groupMembers.includes(id) && !mygroup.find(item => item.id === id)) {
      mygroup.push({ id, name });
      res.json(mygroup);
    } else {
      res.json({ error: 'Not valid' });
    }
  } else {
    res.json({ error: 'Not valid' });
  }
}



module.exports = { getStudentById, postStudent };
