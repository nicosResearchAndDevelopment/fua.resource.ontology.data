const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.fno.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.fno',
    'dct:alternative': '@nrd/fua.resource.ontology/fno',
    'dct:requires':    [{
        'dct:identifier': './local/fno.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/fnom.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/fnoi.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/fnoc.ttl',
        'dct:format':     'text/turtle'
    }]
};
