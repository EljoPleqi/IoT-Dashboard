const express = require('express');
const {
  getAllDevices,
  getDeviceById,
} = require('../controllers/devicesController');

const router = express.Router();

router.route('/devices').get(getAllDevices);
router.route('/devices/:DeviceId').get(getDeviceById);

module.exports = router;
