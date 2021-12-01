const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.ldp.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.ldp',
    'dct:alternative': '@nrd/fua.resource.ontology/ldp',
    'dct:requires':    [{
        'dct:identifier': './local/ldp.ttl',
        'dct:format':     'text/turtle'
    }]
};
