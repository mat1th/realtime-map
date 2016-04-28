Incidents = new Mongo.Collection('incidents');

Incidents.schema = new SimpleSchema({
    date: {
        type: String
    },
    buurt: {
        type: String
    },
    sensorId: {
        type: String
    },
    plein: {
        type: String
    },
    probleem: {
        type: String
    },
    user: {
        type: String
    }
});

Incidents.attachSchema(Incidents.schema);
