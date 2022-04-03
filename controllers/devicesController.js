const { json } = require('express/lib/response');
const fs = require('fs');
const path = require('path');

let rawData = fs.readFileSync(__dirname + '/devData.json', 'utf-8');
let devices = JSON.parse(rawData);

exports.getAllDevices = async (req, res) => {
  res.json(devices);
};

exports.getDeviceById = async (req, res) => {
  const { DeviceId } = req.params;

  devices.forEach((device) => device.id === DeviceId && res.json(device));

  console.log(DeviceId);
};
