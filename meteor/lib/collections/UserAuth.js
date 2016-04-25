test = new Mongo.Collection('test');

test.schema = new SimpleSchema({
    owner: {
        type: String
    },
    scope: {
        type: String,
        optional: true
    },
    access_token: {
        type: String
    },
    team_name: {
        type: String
    },
    team_id: {
        type: String
    }
});

test.attachSchema(test.schema);
