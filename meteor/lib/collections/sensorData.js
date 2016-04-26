SensorData = new Mongo.Collection('sensorData');

SensorData.schema = new SimpleSchema({
    date: {
        type: String
    },
    sensorvalue: {
        type: String
    },
    sensorId: {
        type: String
    }
});

SensorData.attachSchema(SensorData.schema);
