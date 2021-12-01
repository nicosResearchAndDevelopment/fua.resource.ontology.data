const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.odrl.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.ldp',
    'dct:alternative': '@nrd/fua.resource.ontology/ldp',
    'dct:requires':    [{
        'dct:identifier': './local/ODRL22.ttl',
        'dct:format':     'text/turtle'
    }]
};
