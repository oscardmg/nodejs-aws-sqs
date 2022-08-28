require("dotenv").config();
const SQSHelper = require("./sqs-helper");

(async () => {
  const sqs = new SQSHelper();
  const params = {
    QueueUrl: "[YOUR_QUEUE_URL]",
    AttributeNames: ["All"],
  };
  console.log(await sqs.getQueueAttributes(params));
})();