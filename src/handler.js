const serverless = require('serverless-http');
const app = require('./application');

module.exports.hello = serverless(app);

module.exports.world = serverless(app);
