const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.qudt.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.qudt',
    'dct:alternative': '@nrd/fua.resource.ontology/qudt',
    'dct:requires':    [{
        'dct:identifier': './local/schema/qudt.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/schema/datatype.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/schema/mathematics.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/vocab/constant.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/vocab/discipline.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/vocab/prefix.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/vocab/dimensionvector.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/vocab/quantitykind.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/vocab/soqk.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/vocab/sou.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': './local/vocab/unit.ttl',
        'dct:format':     'text/turtle'
    }]
};
