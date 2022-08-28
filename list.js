require("dotenv").config();
const SQSHelper = require("./sqs-helper");

(async () => {
  const sqs = new SQSHelper();
  console.log(await sqs.listQueues());
})()