const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.xsd.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.xsd',
    'dct:alternative': '@nrd/fua.resource.ontology/xsd',
    'dct:requires':    []
};
