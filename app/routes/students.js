let express = require('express');
const { getAll } = require('../controllers/student.controller');
let router = express.Router();
let studentCtrl = require('../controllers/student.controller');

router.get('/getAll',studentCtrl.getAll)

router.post('/saveStudents',studentCtrl.saveStudents)
router.put('/editStudent',studentCtrl.editStudent)
router.delete('/deleteStudent',studentCtrl.deleteStudent)
router.put('/disableStudent',studentCtrl.disableStudent)


module.exports = router;