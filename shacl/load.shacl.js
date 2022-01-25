const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.shacl.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.shacl',
    'dct:alternative': '@nrd/fua.resource.ontology/shacl',
    'dct:requires':    [{
        'dct:identifier': './local/shacl.ttl',
        'dct:format':     'text/turtle'
    }]
};
