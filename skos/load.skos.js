module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.skos',
    'dct:alternative': '@nrd/fua.resource.ontology/skos',
    'dct:requires':    [{
        'dct:identifier': './local/skos.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
