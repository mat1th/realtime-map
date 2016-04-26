
SensorData = new Mongo.Collection('sensorData');

SensorData.schema = new SimpleSchema({
    date: {
        type: String
    },
    "sensor1.id": {
        type: String
    },
    "sensor1.value": {
        type: String
    },
    "sensor2.id": {
        type: String
    },
    "sensor2.value": {
        type: String
    },
    "sensor3.id": {
        type: String
    },
    "sensor3.value": {
        type: String
    },
});

SensorData.attachSchema(SensorData.schema);
