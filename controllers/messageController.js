// controllers/messageController.js

const mygroup = require('../models/mygroup');

function getMessageById(req, res) {
  const { id } = req.params;
  if (!id) {
    const studentNames = mygroup.map(item => `<li>${item.name}</li>`).join('');
    const html = `<html><body><ul>${studentNames}</ul></body></html>`;
    res.send(html);
  } else {
    const student = mygroup.find(item => item.id === id);
    if (student) {
      const html = `<html><body><ul><li>${student.name}</li></ul></body></html>`;
      res.send(html);
    } else {
      res.send('Not valid');
    }
  }
}

module.exports = { getMessageById };
