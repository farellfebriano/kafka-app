const kafka = require("kafka-node");
const client = new kafka.KafkaClient({ kafkaHost: "192.168.254.182:9094" });
const Producer = kafka.Producer;
const producer = new Producer(client);

// message
const payloads = [
  { topic: "test", messages: "hi, im 192.168.254.182", partition: 0 },
  { topic: "test", messages: "hi, im 192.168.254.182", partition: 0 },
];

producer.on("ready", function () {
  console.log("sending payload");
  producer.send(payloads, function (err, data) {
    console.log(data);
  });
});

producer.on("error", function (err) {
  console.log(err);
});
