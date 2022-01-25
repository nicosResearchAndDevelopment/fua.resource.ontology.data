const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.saref.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.saref',
    'dct:alternative': '@nrd/fua.resource.ontology/saref',
    'dct:requires':    [{
        'dct:identifier': './local/saref.ttl',
        'dct:format':     'text/turtle'
    }]
};
