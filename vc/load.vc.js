const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.vc.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.vc',
    'dct:alternative': '@nrd/fua.resource.ontology/vc',
    'dct:requires':    [{
        'dct:identifier': './local/vc.json',
        'dct:format':     'application/ld+json'
    }]
};
