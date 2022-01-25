const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.cert.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.cert',
    'dct:alternative': '@nrd/fua.resource.ontology/cert',
    'dct:requires':    [{
        'dct:identifier': './local/cert.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
