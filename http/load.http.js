const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.http.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.http',
    'dct:alternative': '@nrd/fua.resource.ontology/http',
    'dct:requires':    [{
        'dct:identifier': './local/http.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
