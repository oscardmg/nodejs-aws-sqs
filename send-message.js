require("dotenv").config();
const SQSHelper = require("./sqs-helper");

(async () => {
  const sqs = new SQSHelper();
  const params = {
    QueueUrl: "[YOUR_QUEUE_URL]",
    MessageBody: JSON.stringify({
      message: "Hello AWS SQS!",
    }),
  };
  console.log(await sqs.sendMessage(params));
})();