sensors = new Mongo.Collection('sensors');

sensors.schema = new SimpleSchema({
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

sensors.attachSchema(sensors.schema);
