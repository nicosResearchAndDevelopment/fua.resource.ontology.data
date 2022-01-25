const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.schema.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.schema',
    'dct:alternative': '@nrd/fua.resource.ontology/schema',
    'dct:requires':    [{
        'dct:identifier': './local/schema.ttl',
        'dct:format':     'text/turtle'
    }]
};
