const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.owl.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.owl',
    'dct:alternative': '@nrd/fua.resource.ontology/owl',
    'dct:requires':    [{
        'dct:identifier': './local/owl.ttl',
        'dct:format':     'text/turtle'
    }]
};
