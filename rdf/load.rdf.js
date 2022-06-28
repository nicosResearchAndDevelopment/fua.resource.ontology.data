module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.rdf',
    'dct:alternative': '@nrd/fua.resource.ontology/rdf',
    'dct:requires':    [{
        'dct:identifier': './local/rdf.ttl',
        'dct:format':     'text/turtle'
    }]
};
