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
        type: String
    },
    lat: {
        type: String
    },
    user: {
        type: String
    }
});

Sensors.attachSchema(Sensors.schema);
