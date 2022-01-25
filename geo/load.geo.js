const path = require('path');

module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  path.join(__dirname, './load.geo.js'),
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.geo',
    'dct:alternative': '@nrd/fua.resource.ontology/geo',
    'dct:requires':    [{
        'dct:identifier': './local/wgs84.xml',
        'dct:format':     'application/rdf+xml'
    }, {
        'dct:identifier': './local/geosparql.xml',
        'dct:format':     'application/rdf+xml'
    }, {
        'dct:identifier': './local/gml.xml',
        'dct:format':     'application/rdf+xml'
    }, {
        'dct:identifier': './local/sf.xml',
        'dct:format':     'application/rdf+xml'
    }, {
        'dct:identifier': './local/geojson.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
