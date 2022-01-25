const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.cc.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.cc',
    'dct:alternative': '@nrd/fua.resource.ontology/cc',
    'dct:requires':    [{
        'dct:identifier': './local/cc.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
