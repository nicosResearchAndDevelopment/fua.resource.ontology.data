module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.data/geo',
    'dct:requires':    [{
        'dct:identifier': '../../data/geo/wgs84.xml',
        'dct:format':     'application/rdf+xml'
    }, {
        'dct:identifier': '../../data/geo/geosparql.xml',
        'dct:format':     'application/rdf+xml'
    }, {
        'dct:identifier': '../../data/geo/gml.xml',
        'dct:format':     'application/rdf+xml'
    }, {
        'dct:identifier': '../../data/geo/sf.xml',
        'dct:format':     'application/rdf+xml'
    }, {
        'dct:identifier': '../../data/geo/geojson.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
