// basic info
App.info({
    name: 'project 3',
    description: '',
    author: '',
    website: ''
});

Plugin.registerCompiler({
    filenames: ['xxx.next.css'],
    archMatching: 'web',
}, function () {
    return new CssnextCompiler(cssnextOptions)
});

// CORS for Meteor app
App.accessRule('meteor.local/*');
// allow tiles
App.accessRule('*.openstreetmap.org/*');
App.accessRule('*.openstreetmap.de/*');
App.accessRule('*.tile.thunderforest.com/*');
App.accessRule('*.basemaps.cartocdn.com/*');
