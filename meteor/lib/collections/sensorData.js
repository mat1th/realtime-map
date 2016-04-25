SensorData = new Mongo.Collection('sensorData');

SensorData.schema = new SimpleSchema({
    date: {
        type: String
    },
    sensor1: {
        type: Number
    },
    sensor2: {
        type: Number
    },
    sensor3: {
        type: Number
    }
});

SensorData.attachSchema(SensorData.schema);
