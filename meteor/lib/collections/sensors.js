Sensors = new Mongo.Collection('sensors');

Sensors.schema = new SimpleSchema({
    date: {
        type: String
    },
    name: {
        type: String
    },
    location: {
        type: String
    },
    lon: {
        type: Number
    },
    lat: {
        type: Number
    },
    user: {
        type: String
    }
});

Sensors.attachSchema(Sensors.schema);
