const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.acl.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.acl',
    'dct:alternative': '@nrd/fua.resource.ontology/acl',
    'dct:requires':    [{
        'dct:identifier': './local/acl.ttl',
        'dct:format':     'text/turtle'
    }]
};
