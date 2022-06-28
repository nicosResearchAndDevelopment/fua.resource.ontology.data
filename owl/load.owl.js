module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.owl',
    'dct:alternative': '@nrd/fua.resource.ontology/owl',
    'dct:requires':    [{
        'dct:identifier': './local/owl.ttl',
        'dct:format':     'text/turtle'
    }]
};
