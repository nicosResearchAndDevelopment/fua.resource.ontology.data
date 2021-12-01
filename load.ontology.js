const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.ontology.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.ontology',
    'dct:alternative': '@nrd/fua.resource.ontology',
    'dct:requires':    [{
        'dct:identifier': './ldp/load.ldp.js',
        'dct:format':     'application/fua.load+js'
    }]
};
