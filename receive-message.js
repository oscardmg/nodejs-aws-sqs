require("dotenv").config();
const SQSHelper = require("./sqs-helper");

(async () => {
  const sqs = new SQSHelper();
  const params = {
    QueueUrl:
      "https://sqs.us-east-2.amazonaws.com/060866722946/yoky-code-testing",
    MaxNumberOfMessages: 1
  };
  console.log(await sqs.receiveMessage(params));
})();