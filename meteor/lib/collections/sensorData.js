SensorData = new Mongo.Collection('sensorData');

SensorData.schema = new SimpleSchema({
    date: {
        type: String
    },
    "sensorvalue.value1": {
        type: String
    },
    "sensorvalue.value2": {
        type: String
    },
    sensorId: {
        type: String
    }
});

SensorData.attachSchema(SensorData.schema);
