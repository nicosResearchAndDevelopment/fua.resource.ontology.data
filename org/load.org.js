module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.org',
    'dct:alternative': '@nrd/fua.resource.ontology/org',
    'dct:requires':    [{
        'dct:identifier': './local/org.ttl',
        'dct:format':     'text/turtle'
    }]
};
