module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.time',
    'dct:alternative': '@nrd/fua.resource.ontology/time',
    'dct:requires':    [{
        'dct:identifier': './local/time.ttl',
        'dct:format':     'text/turtle'
    }]
};
