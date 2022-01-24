const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.ldn.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.ldn',
    'dct:alternative': '@nrd/fua.resource.ontology/ldn',
    'dct:requires':    []
};
