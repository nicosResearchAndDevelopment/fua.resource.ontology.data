const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.prov.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.prov',
    'dct:alternative': '@nrd/fua.resource.ontology/prov',
    'dct:requires':    [{
        'dct:identifier': './local/prov.ttl',
        'dct:format':     'text/turtle'
    }]
};
